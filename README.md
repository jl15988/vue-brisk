# vue-brisk
![](https://img.shields.io/badge/github-jl15988-000000?logo=github&link=https://github.com/jl15988) ![](https://img.shields.io/badge/github-vue--brisk-000000?logo=github&link=https://github.com/jl15988/vue-brisk)

## 简介
提供前端即拿即用的组件以及工具，对于功能开发来说，我们需要开发很多相似的功能，如查询表格、浏览详情等功能、我们将那些可公用的组件和工具进行抽离，以实现即拿即用的高效开发。

名称由来：brisk（轻快的;清新的;快的;敏捷的），因为是基于vue的项目，所以添加前缀为vue。该名称表明了我们秉承轻快的开发理念，用起来也能够清爽无比。



## 说明及版本

当前项目使用比较主流的 vue2.x + element-ui，符合大多数应用场景。

下面对于ElementUI都简称为EUI。

| 标题       | 版本 |
| ---------- | ---- |
| vue        | 2.x  |
| element-ui | 2.x  |



## scss变量配置

所有scss变量都在`src/assets/scss/params.scss`中，目前包括一下参数。

```scss
// 头logo标题颜色
$header-logo-color: #dbebff;

/*
侧边栏
 */
$side-bg-color: #409EFF; // 整体背景色
$side-font-color: #dbebff; // 文字颜色
$side-group-title-color: #80bcff; // 分组标题颜色
$side-hover-bg-color: #50aaff; // 激活背景色
$side-group-bg-color: #006be0; // 组背景色
$side-hover-group-bg-color: #005cc0; // 组激活背景色

/*
layout
 */
$footer-height: 40px; // 页脚高度
$header-height: 60px; // 头高度
$main-height: calc(100vh - #{$footer-height} - #{$header-height}); // 主视图高度
$side-width: 240px; // 侧边栏宽度
```




## 组件
### 1. 动态表格

能够根据JSON数据渲染表格，多用于动态生成表格的应用，并满足EUI的所有属性，但不支持自定义模板。

```vue
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

### 2. 菜单

包含了EUI的所有属性，简化了item的装配。

```vue
<bk-menu
    :list="menus"
    @select="selectHandle"
    index-key="path"
    :default-active="$route.path"
    router></bk-menu>
```

额外属性

| 参数      | 说明                                               | 类型   | 可选择 | 默认值         |
| --------- | -------------------------------------------------- | ------ | ------ | -------------- |
| list      | 菜单列表                                           | Array  | -      | []             |
| index-key | 子菜单用于标识的属性名称，会将该属性设置为菜单表示 | String | -      | 自动生成的uuid |

**菜单项**

能够适配折叠、分组等需求，自动检测data中是否包含子菜单，进行渲染。

```vue
<bk-menu-item
    :data="menu"
    :index-key="indexKey"
    :default-link="!$attrs.router"
></bk-menu-item>
```

属性

| 参数      | 说明                                               | 类型   | 可选择 | 默认值         |
| --------- | -------------------------------------------------- | ------ | ------ | -------------- |
| data      | 菜单数据                                           | Object | -      | -              |
| index     | 当前菜单标识                                       | String | -      | -              |
| index-key | 子菜单用于标识的属性名称，会将该属性设置为菜单表示 | String | -      | 自动生成的uuid |
| link-key  | 路由属性名称，会根据该属性跳转路由                 | String | -      | path           |

### Header

```vue
<bk-header breadcrumb></bk-header>
```

属性

| 参数       | 说明                                                         | 类型    | 可选择      | 默认值 |
| ---------- | ------------------------------------------------------------ | ------- | ----------- | ------ |
| breadcrumb | 是否为面包屑，设置为true，则自动分析多层级路由，显示面包屑，路由必须包含meta.title属性用于显示标题，设置为false则可以自定义内容 | Boolean | true，false | false  |

### 面包屑

自动匹配多层级路由，路由必须包含meta.title属性用于显示标题。

```vue
<bk-breadcrumb></bk-breadcrumb>
```

### 头logo

头部显示的logo，可自适应侧边栏折叠

```vue
<bk-header-logo title="vue-brisk">
    <img :src="require('@/assets/logo.png')"/>
</bk-header-logo>
```

属性

| 参数  | 说明       | 类型   | 可选择 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| to    | 跳转的路由 | String | -      | /      |
| title | 显示的标题 | String | -      | -      |

插槽，用于自定义图片，没有的话折叠时自动显示标题的第一个字。

### 全局容器

用于布局全局的容器，已定义侧边栏，及头部面包屑，可以加在App.vue中充当全局的容器，所有页面将会显示在主体框中。

```vue
<bk-container>
    <router-view/>
</bk-container>
```



更多内容开发中...
