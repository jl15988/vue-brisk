#### 1. 动态表格（VariableTable）🎹

能够根据JSON数据渲染表格，多用于动态生成表格的应用，并满足EUI的所有属性，复杂内容可定义 `slot` 属性，通过插槽进行自定义内容。

```vue
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
```



##### 📃 属性

| 参数   | 说明                                                         | 类型  | 可选择 | 默认值 |
| ------ | ------------------------------------------------------------ | ----- | ------ | ------ |
| labels | 表格列，Table-column所拥有的属性，可以直接设置，添加额外的 `slot` 属性来表明当前列为自定义。额外参数请见 [labels属性参数](mds/components/Data?id=📃-labels属性参数)。 | Array | -      | -      |

##### 📃 labels属性参数

| 参数     | 说明                                 | 类型     | 可选择 | 默认值 |
| -------- | ------------------------------------ | -------- | ------ | ------ |
| handle   | 列数据处理函数，参数 {row, index}    | Function | -      | -      |
| slot     | 启用当前属性插槽，值为插槽名称。     | String   | -      | -      |
| children | 子表头，用于表头嵌套，生成多级表头。 | Array    | -      | -      |

##### 🎨 插槽

| 名称         | 说明                                    |
| ------------ | --------------------------------------- |
| 定义的slot值 | 自定义内容，参数为 {row, column, index} |

