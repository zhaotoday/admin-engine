import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import FilesModel from "../../models/admin/files";

const DefaultFormat = ["jpg", "jpeg", "png", "gif"];
const DefaultMaxSize = 2048;

@Component
export default class Uploader extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  multiple;

  @Prop({
    type: Array,
    default: () => DefaultFormat
  })
  format;

  @Prop({
    type: String,
    default: "请上传文件"
  })
  placeholder;

  @Prop({
    type: Number,
    default: DefaultMaxSize
  })
  maxSize;

  @Prop({
    type: [Array, String, Number],
    default: () => []
  })
  defaultFileIds;

  defaultFileList = [];

  @Watch("defaultFileIds", { immediate: true })
  async onDefaultFileIdsChange(newVal, oldVal) {
    const multipleIf = this.multiple && (!oldVal || !oldVal[0]) && newVal[0];
    const singleIf = !this.multiple && newVal;

    if (multipleIf || singleIf) {
      const {
        data: { items }
      } = await this.getFilesList();

      this.defaultFileList = items.map(item => this.getFile(item));
      this.$refs.upload.fileList = this.$helpers.deepCopy(this.defaultFileList);
      this.$emit("change", this.getIds());
    }
  }

  getIds() {
    const ids = this.$refs.upload.fileList.map(item => item.id);
    return this.multiple ? ids : ids.join(",");
  }

  getFile(data) {
    return {
      id: data.id,
      name: data.name,
      url: this.$helpers.getFileUrlById(data.id)
    };
  }

  getFilesList() {
    return new FilesModel().GET({
      query: {
        where: {
          id: this.multiple
            ? { $in: this.defaultFileIds }
            : { $eq: this.defaultFileIds }
        }
      }
    });
  }

  handleFormatError(file) {
    this.$Message.error(`文件 [${file.name}] 格式错误`);
  }

  handleMaxSize(file) {
    this.$Message.error(`文件 [${file.name}] 不能大于 ${this.maxSize / 1024}M`);
  }

  handleRemove() {
    this.$emit("change", this.getIds());
  }

  handleSuccess({ data }, file) {
    file.id = data.id;
    file.name = data.name;
    file.url = this.$helpers.getFileUrlById(data.id);

    if (!this.multiple) {
      this.$refs.upload.fileList = [file];
    }

    this.$emit("change", this.getIds());
  }
}
