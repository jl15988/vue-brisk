<template>
  <el-table :data="list" v-bind="$attrs" v-on="$listeners">
    <template v-for="label in labels">
      <bk-variable-table-column v-bind="label"></bk-variable-table-column>
    </template>
  </el-table>
</template>

<script>
import dataUtil from "@/utils/dataUtil";
import BkVariableTableColumn from "@/components/data/BkVariableTable/BkVariableTableColumn";

export default {
  name: "BkVariableTable",
  components: {BkVariableTableColumn},
  props: {
    labels: Array,
    data: Array
  },
  computed: {
    list() {
      return dataUtil.labelDataCope(this.labels, this.data);
    }
  }
}
</script>

<style scoped>

</style>