<template>
  <el-table
    :data="config.tableData"
    style="width: 100%"
  >
    <el-table-column
      v-for="item of config.tableColumn"
      :key="item.prop"
      :width="item.width"
      :prop="item.prop"
      :label="item.label"
      :align="item.align ? item.align : 'center'"
    >
      <!-- 由config渲染 -->
      <template slot-scope="scope">
        <slot :name="item.prop" :row="scope.row">
          {{ scope.row[item.prop] ? scope.row[item.prop] : '-' }}
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>
