<template>
  <span class="c-wx-user-info">
    {{ detail.nickName }}
  </span>
</template>

<script>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import WxUsersModel from "../../models/admin/wx-users";

@Component
export default class WxUserInfo extends Vue {
  @Prop({
    type: Number,
    default: 0
  })
  pk;

  detail = {};

  @Watch("pk", { deep: true, immediate: true })
  onPkChange(newVal) {
    newVal && this.getDetail();
  }

  async getDetail() {
    const { data } = await new WxUsersModel().GET({ id: this.pk });
    this.detail = data;
  }
}
</script>
