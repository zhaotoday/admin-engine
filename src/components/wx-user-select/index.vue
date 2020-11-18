<template>
  <Select
    :placeholder="placeholder"
    clearable
    filterable
    :multiple="multiple"
    :value.sync="value"
    @on-change="change"
  >
    <Option
      v-for="item in list.items"
      :key="item.id"
      :value="item.id"
      :label="item.nickName"
    >
      {{ item.nickName }}
    </Option>
  </Select>
</template>

<script src="./script.js"></script>
