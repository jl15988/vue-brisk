#### 1. 全局容器（Container）

用于布局全局的容器，已定义侧边栏，及头部面包屑，可以加在App.vue中充当全局的容器，所有页面将会显示在主体框中。

```vue
<template>
    <div id="app">
        <bk-container
            :menus="menus"
            side-stretch
            :side-opened="menu.opened"
            @opened-change="openedChange"
            @menu-select="menuSelect">
            <template slot="header-logo">
                <img slot="header-logo" :src="require('./assets/logo.png')"/>
            </template>
            <router-view/>
        </bk-container>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            menus: [
                {
                    "id": "1",
                    "title": "菜单1",
                    "children": [
                        {
                            "id": "1-1",
                            "title": "子菜单1-1",
                            "path": ""
                        },
                        {
                            "id": "1-2",
                            "title": "子菜单1-2",
                            "path": ""
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['menu'])
    },
    methods: {
        openedChange() {
            // 改变侧边栏伸缩状态
            this.$store.commit('setting/CHANGE_MENU_STATUS');
        },
        menuSelect(index, indexPath) {
            // 侧边栏菜单选择
            console.log(index, indexPath)
        }
    }
}
</script>
```

##### 📃 属性

| 参数           | 说明                                                         | 类型          | 可选择      | 默认值           |
| -------------- | ------------------------------------------------------------ | ------------- | ----------- | ---------------- |
| menu-index-key | 菜单项用于标识的属性名称，会将该属性设置为菜单标识，若没有则自动生成级别ID，如1，1-1等。 | String        | -           | 默认生成的级别ID |
| menus          | 菜单列表，属性见 [list 属性参数](http://localhost:3000/#/mds/components/Navigation?id=📃-list属性参数)。 | Array(Object) | -           | []               |
| side-stretch   | 开启侧边栏伸缩按钮。                                         | Boolean       | true，false | false            |
| side-opened    | 侧边栏伸缩状态。                                             | Boolean       | true，false | true             |

##### 🎨插槽

| 名称        | 说明                                                       |
| ----------- | ---------------------------------------------------------- |
| 默认        | 主题内容。                                                 |
| header-logo | 用于自定义logo图片，没有的话折叠时自动显示标题的第一个字。 |

##### 🔗 事件

| 参数          | 说明                     | 回调参数                                                     |
| ------------- | ------------------------ | ------------------------------------------------------------ |
| menu-select   | 菜单选择回调。           | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path |
| opened-change | 侧边栏伸缩按钮点击回调。 | -                                                            |



#### 2. Header

```vue
<template>
	<bk-header breadcrumb side-stretch :side-opened="menu.opened" @opened-change="openedChange"></bk-header>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    computed: {
        ...mapGetters(['menu'])
    },
    methods: {
        openedChange() {
            // 改变侧边栏伸缩状态
            this.$store.commit('setting/CHANGE_MENU_STATUS');
        }
    }
}
</script>
```

##### 📃 属性

| 参数         | 说明                                                         | 类型    | 可选择      | 默认值 |
| ------------ | ------------------------------------------------------------ | ------- | ----------- | ------ |
| breadcrumb   | 是否为面包屑，设置为true，则自动分析多层级路由，显示面包屑，路由必须包含meta.title属性用于显示标题，设置为false则可以自定义内容。 | Boolean | true，false | false  |
| side-stretch | 开启侧边栏伸缩按钮。                                         | Boolean | true，false | false  |
| side-opened  | 侧边栏伸缩状态。                                             | Boolean | true，false | true   |

##### 🔗 事件

| 参数          | 说明                     | 回调参数 |
| ------------- | ------------------------ | -------- |
| opened-change | 侧边栏伸缩按钮点击回调。 | -        |

##### 🎨插槽

| 名称 | 说明                                     |
| ---- | ---------------------------------------- |
| 默认 | 关闭breadcrumb属性生效，用于自定义内容。 |



#### 3. HeaderLogo

头部显示的logo，可自适应侧边栏折叠

```vue
<bk-header-logo title="vue-brisk">
    <img :src="require('@/assets/logo.png')"/>
</bk-header-logo>
```

##### 📃 属性

| 参数   | 说明                             | 类型    | 可选择      | 默认值 |
| ------ | -------------------------------- | ------- | ----------- | ------ |
| to     | 跳转的路由                       | String  | -           | /      |
| title  | 显示的标题                       | String  | -           | -      |
| opened | 伸缩状态，用于适应侧边栏伸缩状态 | Boolean | true，false | false  |

##### 🎨插槽

| 名称 | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| 默认 | 用于自定义logo图片，没有的话折叠时自动显示标题的第一个字。 |
