<template>
  <div>
    <slot></slot>
    <Table
      :context="$parent"
      class="u-mb15"
      border
      :columns="columns"
      :data="data"
      @on-selection-change="handleSelectionChange"
    />
    <table>
      <tr>
        <td v-if="statistic" style="padding-right: 10px;">
          {{ statistic }}
        </td>
        <td>
          <Page
            v-show="showPage"
            :total="total"
            :current="pageCurrent"
            :page-size="pageSize"
            show-total
            show-elevator
            @on-change="handlePageChange"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import consts from "@/utils/consts";

@Component
export default class List extends Vue {
  @Prop({
    type: Array,
    default: () => []
  })
  columns;

  @Prop({
    type: Array,
    default: () => []
  })
  data;

  @Prop({
    type: Number,
    default: 1
  })
  total;

  @Prop({
    type: Number,
    default: consts.PageSize
  })
  pageSize;

  @Prop({
    type: Number,
    default: 1
  })
  pageCurrent;

  @Prop({
    type: Object,
    default: () => ({})
  })
  searchWhere;

  @Prop({
    type: Boolean,
    default: true
  })
  showPage;

  @Prop({
    type: String,
    default: ""
  })
  statistic;

  handleSelectionChange(selection) {
    this.$emit("selection-change", selection);
  }

  handlePageChange(current) {
    this.$router.push({
      query: Object.assign(
        { listPageCurrent: current },
        this.searchWhere
          ? { listSearchWhere: JSON.stringify(this.searchWhere) }
          : null
      )
    });
  }
}
</script>
