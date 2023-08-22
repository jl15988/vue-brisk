#### 1. 菜单（Menu）🎹

包含了EUI的所有属性，简化了item的装配，只需提供菜单的JSON数据，即可生成菜单，颜色等设置可移步[scss变量配置](#scss变量配置)。

```vue
<bk-menu
    :list="menus"
    @select="selectHandle"
    index-key="path"
    :default-active="$route.path"
    router></bk-menu>
```

##### 📃 属性

| 参数      | 说明                                               | 类型   | 可选择 | 默认值         |
| --------- | -------------------------------------------------- | ------ | ------ | -------------- |
| list      | 菜单列表                                           | Array  | -      | []             |
| index-key | 子菜单用于标识的属性名称，会将该属性设置为菜单表示 | String | -      | 自动生成的uuid |

##### 菜单项（bk-menu-item）

能够适配折叠、分组等需求，自动检测`data`中是否包含子菜单，进行渲染。

```vue
<bk-menu-item
    :data="menu"
    :index-key="indexKey"
    :default-link="!$attrs.router"
></bk-menu-item>
```

###### 📃 属性

| 参数      | 说明                                                       | 类型    | 可选择      | 默认值         |
| --------- | ---------------------------------------------------------- | ------- | ----------- | -------------- |
| data      | 菜单数据                                                   | Object  | -           | -              |
| index     | 当前菜单标识                                               | String  | -           | -              |
| index-key | 子菜单用于标识的属性名称，会将该属性设置为菜单表示         | String  | -           | 自动生成的uuid |
| router    | 设置为true，将适配el-menu的router模式，即index标识充当路由 | Boolean | true，false | false          |
| link-key  | 当router为false时启用，路由属性名称，会根据该属性跳转路由  | String  | -           | path           |



#### 2. 面包屑

自动匹配多层级路由，路由必须包含`meta.title`属性用于显示标题。

```vue
<bk-breadcrumb></bk-breadcrumb>
```
