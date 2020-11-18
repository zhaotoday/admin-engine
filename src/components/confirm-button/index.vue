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

<script src="./script.js"></script>
