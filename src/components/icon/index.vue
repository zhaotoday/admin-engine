<template>
  <i class="c-iconfont" :class="'c-iconfont--' + type"></i>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  type;
}
</script>

<style lang="scss" src="./style.scss"></style>
