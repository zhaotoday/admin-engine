import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BulkDelete extends Vue {
  @Prop({
    type: Array,
    default: () => []
  })
  selectedItems;

  @Prop({
    type: Boolean,
    default: true
  })
  showConfirm;

  handleOk() {
    if (!this.selectedItems.length) {
      this.$Message.error("没有选中记录");
    } else {
      this.$emit("ok", this.selectedItems.map(item => item.id).join(","));
    }
  }
}
