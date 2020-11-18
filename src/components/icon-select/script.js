import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class IconSelect extends Vue {
  @Prop({
    type: String,
    default: "请选择图标"
  })
  placeholder;

  @Prop({
    type: [Array, String, Number],
    default: ""
  })
  value;

  @Emit()
  change(value) {
    return value;
  }
}
