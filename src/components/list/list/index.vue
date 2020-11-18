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

<script src="./script.js"></script>
