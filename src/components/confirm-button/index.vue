<template>
  <Poptip
    confirm
    placement="top-end"
    :title="confirmText"
    @on-ok="$emit('ok')"
    ok-text="确认"
    cancel-text="取消"
  >
    <Button :disabled="disabled">{{ buttonText }}</Button>
  </Poptip>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    }
  }
})
export default class ConfirmButton extends Vue {}
</script>
