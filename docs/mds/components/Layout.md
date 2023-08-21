#### 1. 全局容器（Container）

用于布局全局的容器，已定义侧边栏，及头部面包屑，可以加在App.vue中充当全局的容器，所有页面将会显示在主体框中。

```vue
<bk-container>
    <router-view/>
</bk-container>
```



#### 2. Header

```vue
<bk-header breadcrumb></bk-header>
```

##### 📃 属性

| 参数       | 说明                                                         | 类型    | 可选择      | 默认值 |
| ---------- | ------------------------------------------------------------ | ------- | ----------- | ------ |
| breadcrumb | 是否为面包屑，设置为true，则自动分析多层级路由，显示面包屑，路由必须包含meta.title属性用于显示标题，设置为false则可以自定义内容 | Boolean | true，false | false  |



#### 3. HeaderLogo

头部显示的logo，可自适应侧边栏折叠

```vue
<bk-header-logo title="vue-brisk">
    <img :src="require('@/assets/logo.png')"/>
</bk-header-logo>
```

##### 📃 属性

| 参数  | 说明       | 类型   | 可选择 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| to    | 跳转的路由 | String | -      | /      |
| title | 显示的标题 | String | -      | -      |

插槽，用于自定义图片，没有的话折叠时自动显示标题的第一个字。