<template>
  <Poptip
    v-if="showConfirm && selectedItems.length"
    confirm
    title="确认删除？"
    @on-ok="handleOk"
    ok-text="确认"
    cancel-text="取消"
  >
    <Button type="primary">
      批量删除
    </Button>
  </Poptip>
  <Button v-else type="primary" @click="handleOk">
    批量删除
  </Button>
</template>

<script>
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
</script>
