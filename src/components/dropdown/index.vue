<template>
  <Dropdown @on-click="handleClickItem">
    <Button :disabled="disabled" :style="{ width: `${width}px` }">
      {{ title }}
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <DropdownMenu v-if="!disabled" slot="list">
      <DropdownItem
        v-for="item in options"
        :key="item.value"
        :name="item.value"
      >
        {{ item.label }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({
    type: Number,
    default: 70
  })
  width;

  @Prop({
    type: String,
    default: ""
  })
  title;

  @Prop({
    type: Object,
    default: () => {}
  })
  selected;

  @Prop({
    type: Boolean,
    default: false
  })
  disabled;

  @Prop({
    type: Array,
    default: () => []
  })
  options;

  handleClickItem(name) {
    this.$emit("click", name);
  }
}
</script>
