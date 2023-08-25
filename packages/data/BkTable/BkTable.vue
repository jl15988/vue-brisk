<template>
    <el-table :data="list" v-bind="$globalAttrs.append($attrs, 'table')" v-on="$listeners">
        <template v-for="label in labels">
            <el-table-column v-if="label.slot && (!label.children || !label.children.length)" v-bind="dealLabel(label)">
                <template slot="header" slot-scope="scope">
                    <slot :name="`${label.slot}-header`" :column="scope.column" :index="scope.$index"></slot>
                </template>
                <template slot-scope="scope">
                    <slot :name="label.slot" :row="scope.row" :column="scope.column" :index="scope.$index"></slot>
                </template>
            </el-table-column>
            <bk-table-column v-else-if="label" v-bind="dealLabel(label)"></bk-table-column>
        </template>
        <template #append>
            <slot name="append"></slot>
        </template>
    </el-table>
</template>

<script>
import dataUtil from "../../utils/dataUtil";
import BkTableColumn from "./BkTableColumn";

export default {
    name: "BkTable",
    components: {BkTableColumn},
    props: {
        labels: Array,
        data: Array
    },
    computed: {
        list() {
            return dataUtil.labelDataCope(this.labels, this.data);
        }
    },
    methods: {
        dealLabel(label) {
            const label2 = Object.assign({}, label);
            delete label2.slot;
            return label2;
        }
    }
}
</script>

<style scoped>

</style>