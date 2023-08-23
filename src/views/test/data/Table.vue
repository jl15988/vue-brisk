<template>
    <div>
        <bk-table :labels="labels" :data="list">
            <template slot="status-header" slot-scope="scope">
                状态 <i @click="onStatus(scope)" class="el-icon-edit-outline data-table-header-icon"></i>
            </template>
            <template #status="{row}">
                {{ row.age > 20 ? '符合' : '不符合' }}
            </template>
        </bk-table>
    </div>
</template>

<script>
import BkTable from "@/components/data/BkTable/BkTable";

export default {
    name: "Table",
    components: {BkTable},
    data() {
        return {
            labels: [{
                type: 'selection'
            }, {
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
    methods: {
        onStatus(scope) {
            console.log(scope.column);
        }
    }
}
</script>

<style scoped>

</style>