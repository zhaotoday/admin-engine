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

<script>
import { Component, Vue } from "vue-property-decorator";
import Model from "../../models/admin/wx-users";

@Component({
  props: {
    placeholder: {
      type: String,
      default: "请选择微信用户"
    },
    value: {
      type: [String, Number],
      default: 0
    },
    multiple: {
      type: Boolean,
      default: false
    }
  }
})
export default class WxUserSelect extends Vue {
  list = {
    items: []
  };

  async created() {
    this.list = await this.getList();
  }

  async getList() {
    const { data } = await new Model().GET({ query: {} });
    return data;
  }

  change(value) {
    this.$emit("change", value);
  }
}
</script>
