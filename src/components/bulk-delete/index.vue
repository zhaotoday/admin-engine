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

<script src="./script.js"></script>
