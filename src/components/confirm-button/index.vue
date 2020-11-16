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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ConfirmButton extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  disabled;

  @Prop({
    type: String,
    default: ""
  })
  buttonText;

  @Prop({
    type: String,
    default: ""
  })
  confirmText;
}
</script>
