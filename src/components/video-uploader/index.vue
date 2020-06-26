<template>
  <div>
    <Upload
      :format="format"
      :max-size="maxSize"
      action="#"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleExceededSize"
      :before-upload="handleBeforeUpload"
      :show-upload-list="false"
    >
      <Button icon="ios-cloud-upload-outline">
        {{ placeholder }}
      </Button>
    </Upload>
    <ul v-if="file.name" class="ivu-upload-list">
      <li class="ivu-upload-list-file">
        <span>
          <i class="ivu-icon ivu-icon-ios-videocam"></i>
          {{ file.name }}
        </span>
        <i
          class="ivu-icon ivu-icon-ios-close ivu-upload-list-remove"
          @click="handleRemove"
        ></i>
        <Progress
          v-if="cProgress.visible"
          :stroke-width="2"
          :percent="cProgress.percent"
        ></Progress>
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import Model from "../../models/admin/videos";
import helpers from "@/utils/helpers";
import TcVod from "vod-js-sdk-v6";

const DefaultFormat = [
  "mp4",
  "ts",
  "flv",
  "wmv",
  "asf",
  "rm",
  "rmvb",
  "mpg",
  "mpeg",
  "3gp",
  "mov",
  "webm",
  "mkv",
  "avi"
];
const DefaultMaxSize = 1024 * 1024 * 10;
const DefaultFile = {
  name: "",
  type: "",
  fileId: "",
  fileUrl: "",
  data: {}
};

@Component({
  props: {
    format: {
      type: Array,
      default() {
        return DefaultFormat;
      }
    },
    placeholder: {
      type: String,
      default: "请上传文件"
    },
    maxSize: {
      type: Number,
      default: DefaultMaxSize
    },
    defaultId: {
      type: Number,
      default: 0
    }
  }
})
export default class VideoUploader extends Vue {
  cProgress = {
    visible: false,
    percent: 0
  };

  file = helpers.deepCopy(DefaultFile);

  @Watch("defaultId", { immediate: true })
  async onDefaultIdChange(newVal, oldVal) {
    if (!oldVal && newVal) {
      const {
        data: { name }
      } = await new Model().GET({ id: newVal });
      this.file.name = name;
    }
  }

  handleFormatError(file) {
    this.$Message.error(`文件 [${file.name}] 格式错误`);
  }

  handleExceededSize(file) {
    this.$Message.error(`文件 [${file.name}] 不能大于 ${this.maxSize / 1024}M`);
  }

  handleRemove() {
    this.file = helpers.deepCopy(DefaultFile);
    this.$emit("change", 0);
  }

  handleBeforeUpload(file) {
    this.cProgress.percent = 0;
    this.cProgress.visible = true;

    this.uploader = this.tcVod.upload({
      mediaFile: file,
      mediaName: `${this.getSchoolId()}_${this.user.id}_${new Date().getTime()}`
    });

    this.file.name = file.name;
    this.file.type = file.type;
    this.file.size = file.size;

    this.uploader.on("media_progress", res => {
      this.cProgress.percent = parseInt(res.percent * 100, 10);
    });

    this.uploader.done().then(async res => {
      this.cProgress.visible = false;

      this.file.fileId = res.fileId;
      this.file.fileUrl = res.video.url;
      this.file.data = res;

      const { data } = await new Model().POST({ body: this.file });

      this.$emit("change", data.id);
    });
  }

  async getSignature() {
    const { data } = await this.$store.dispatch("videos/postAction", {
      action: "signature",
      body: {
        args: { procedure: "自适应码流" }
      }
    });
    return data;
  }

  async created() {
    this.tcVod = new TcVod({ getSignature: this.getSignature });
  }
}
</script>
