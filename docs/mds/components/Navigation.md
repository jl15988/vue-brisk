#### 1. 菜单（Menu）🎹

包含了EUI的所有属性，简化了item的装配，只需提供菜单的JSON数据即可生成菜单，可配置全局颜色等参数，可移步[Config 配置](mds/Config)。

```vue
<bk-menu
    :list="menus"
    @select="selectHandle"
    :index-key="menuIndexKey"
    :collapse="!sideOpened"
    :collapse-transition="false"
></bk-menu>
```

##### 📃 属性

| 参数                      | 说明                                                         | 类型          | 可选择 | 默认值 |
| ------------------------- | ------------------------------------------------------------ | ------------- | ------ | ------ |
| list                      | 菜单列表，属性见[list属性参数](mds/components/Navigation?id=📃-list属性参数)。 | Array(Object) | -      | []     |
| index-key                 | 菜单项用于标识的属性名称，会将该属性设置为菜单标识，若没有则自动生成级别ID，如1，1-1等。 | String        | -      | 默认生成的级别ID |
| sub-background-color      | 子菜单背景色。                                               | String        | -      | #006be0 |
| hover-background-color    | 鼠标指向的背景色。                                       | String        | -      | #50aaff |
| hover-sub-background-color | 子菜单鼠标指向的背景色。                              | String        | -      | #005cc0 |
| group-title-color         | 组标题颜色。                                                 | String        | -      | #80bcff |
| active-background-color | 选中的背景颜色。 | String | - | - |

##### 📃 list属性参数

| 参数     | 说明                                               | 类型          | 可选择      | 默认值 |
| -------- | -------------------------------------------------- | ------------- | ----------- | ------ |
| title    | 菜单名称。                                         | String        | -           | -      |
| icon     | 菜单图标。                                         | String        | -           | -      |
| children | 子菜单。                                           | Array(Object) | -           | -      |
| path     | 跳转地址。                                         | String        | -           | -      |
| isGroup  | 是否为分组菜单。                                   | Boolean       | true, false | false  |
| disabled | 是否禁用。                                         | Boolean       | true, false | false  |
| 自定义   | 可自己加属性，上面的属性为固定格式，自定义不限制。 | -             | -           | -      |



#### 2. 菜单项（bk-menu-item）

能够适配折叠、分组等需求，自动检测`data`中是否包含子菜单，进行渲染。

```vue
<bk-menu-item
    :data="menu"
    :index-key="id"
    router
></bk-menu-item>
```

##### 📃 属性

| 参数      | 说明                                                         | 类型    | 可选择      | 默认值         |
| --------- | ------------------------------------------------------------ | ------- | ----------- | -------------- |
| data      | 菜单数据。                                                   | Object  | -           | -              |
| index     | 当前菜单标识。                                               | String  | -           | -              |
| index-key | 子菜单用于标识的属性名称，会将该属性设置为菜单表示。         | String  | -           | 自动生成的uuid |
| router    | 设置为true，将适配el-menu的router模式，即index标识充当路由。 | Boolean | true，false | false          |
| link-key  | 当router为false时启用，路由属性名称，会根据该属性跳转路由。  | String  | -           | path           |



#### 3. 面包屑

自动匹配多层级路由，路由必须包含`meta.title`属性用于显示标题。

```vue
<bk-breadcrumb></bk-breadcrumb>
```
