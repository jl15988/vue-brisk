#### 1. 动态表格（VariableTable）🎹

> 不支持自定义模板

能够根据JSON数据渲染表格，多用于动态生成表格的应用，并满足EUI的所有属性，但不支持自定义模板。

```/*vue*/
<template>
    <div>
        <bk-variable-table :labels="labels" :data="list" border></bk-variable-table>
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

| 参数   | 说明                                             | 类型   | 可选择 | 默认值 |
| ------ | ------------------------------------------------ | ------ | ------ | ------ |
| labels | 表格列，Table-column所拥有的属性，可以直接设置。 | Object | -      | -      |
