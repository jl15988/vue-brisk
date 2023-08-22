<template>
    <div>
        <bk-variable-table :labels="labels" :data="list" border>
            <template #status="{row}">
                {{ row.age > 20 ? '符合' : '不符合' }}
            </template>
        </bk-variable-table>
    </div>
</template>

<script>
import BkVariableTable from "@/components/data/BkVariableTable/BkVariableTable";

export default {
    name: "Table",
    components: {BkVariableTable},
    data() {
        return {
            labels: [{
                label: '序号',
                type: 'index'
            }, {
                label: '姓名',
                prop: 'name',
                width: '200'
            }, {
                label: '性别',
                prop: 'sex',
                handle: (row) => {
                    if (row.sex === '0') {
                        return "女";
                    } else {
                        return "男";
                    }
                }
            }, {
                label: '年龄',
                prop: 'age'
            }, {
                label: '配送信息',
                children: [{
                    label: '地址',
                    children: [{
                        label: '省份',
                        prop: 'province'
                    }, {
                        label: '市',
                        prop: 'city'
                    }]
                }]
            }, {
                label: '状态',
                prop: 'status',
                slot: 'status'
            }],
            list: [{
                name: '张三',
                sex: '1',
                age: '23',
                province: '山东',
                city: '青岛'
            }, {
                name: '王五',
                sex: '1',
                age: '20'
            }, {
                name: '刘晓',
                sex: '0',
                age: '23'
            },]
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>