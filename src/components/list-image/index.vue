<template>
  <img class="c-list-image" :src="src" />
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ListImage extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  src;
}
</script>

<style lang="scss" src="./style.scss"></style>
