<template>
  <div>
    <basis-table :config="tableConfig" />
  </div>
</template>

<script>
import basisTable from '@/components/basis-components/table'

import tableConfig from './table.config'
export default {
  components: {
    basisTable
  },
  data () {
    return {
      tableConfig
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
