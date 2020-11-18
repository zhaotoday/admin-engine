import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Model from "../../models/admin/wx-users";

@Component
export default class WxUserSelect extends Vue {
  @Prop({
    type: String,
    default: "请选择微信用户"
  })
  placeholder;

  @Prop({
    type: [String, Number],
    default: 0
  })
  value;

  @Prop({
    type: Boolean,
    default: false
  })
  multiple;

  list = {
    items: []
  };

  async created() {
    this.list = await this.getList();
  }

  async getList() {
    const { data } = await new Model().GET({ query: {} });
    return data;
  }

  @Emit()
  change(value) {
    return value;
  }
}
