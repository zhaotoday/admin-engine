<template>
  <Select
    class="c-icon-select"
    :placeholder="placeholder"
    clearable
    :value.sync="value"
    @on-change="change"
  >
    <c-icon
      v-if="value"
      class="c-icon-select__prefix"
      slot="prefix"
      size="small"
      :type="value"
    ></c-icon>
    <Option v-for="item in dicts.Icon" :key="item.value" :value="item.value">
      <c-icon class="c-icon-select__option-icon" :type="item.value"></c-icon>
      {{ item.label }}
    </Option>
  </Select>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
