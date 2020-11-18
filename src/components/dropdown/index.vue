<template>
  <Dropdown @on-click="click">
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

<script src="./script.js"></script>
