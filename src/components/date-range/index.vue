<template>
  <DatePicker
    type="daterange"
    :options="options"
    :value="value"
    placement="bottom-end"
    placeholder="请选择时间范围"
    @on-change="
      date => {
        $emit('change', date);
      }
    "
  ></DatePicker>
</template>

<script src="./script.js"></script>
