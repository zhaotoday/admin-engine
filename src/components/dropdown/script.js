import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({
    type: Number,
    default: 70
  })
  width;

  @Prop({
    type: String,
    default: ""
  })
  title;

  @Prop({
    type: Object,
    default: () => {}
  })
  selected;

  @Prop({
    type: Boolean,
    default: false
  })
  disabled;

  @Prop({
    type: Array,
    default: () => []
  })
  options;

  @Emit()
  click(name) {
    return name;
  }
}
