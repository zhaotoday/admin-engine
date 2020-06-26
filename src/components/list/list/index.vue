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
import { Component, Vue } from "vue-property-decorator";
import consts from "@/utils/consts";

@Component({
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    total: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: consts.PageSize
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    searchWhere: {
      type: Object,
      default() {
        return {};
      }
    },
    showPage: {
      type: Boolean,
      default: true
    },
    statistic: {
      type: String,
      default: ""
    }
  }
})
export default class List extends Vue {
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
