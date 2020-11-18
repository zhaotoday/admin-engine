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

<script>
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class IconSelect extends Vue {
  @Prop({
    type: String,
    default: "请选择图标"
  })
  placeholder;

  @Prop({
    type: [Array, String, Number],
    default: ""
  })
  value;

  @Emit()
  change(value) {
    return value;
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
