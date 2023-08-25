<template>
    <el-menu
        v-bind="attr"
        v-on="$listeners"
        class="bk-menu"
        :style="$globalAttrs.varStyle($props, 'menu', ['subBackgroundColor', 'hoverBackgroundColor', 'hoverSubBackgroundColor', 'groupTitleColor', 'activeBackgroundColor'])">
        <template v-for="menu in menus">
            <bk-menu-item
                :data="menu"
                :index-key="indexKey"
                :router="$attrs.router"
            ></bk-menu-item>
        </template>
    </el-menu>
</template>

<script>
import BkMenuItem from "./BkMenuItem";
import dataUtil from "../../utils/dataUtil";

export default {
    name: "BkMenu",
    components: {BkMenuItem},
    props: {
        list: Array,
        indexKey: String,
        // 子菜单背景色
        subBackgroundColor: String,
        // 鼠标指向的背景色
        hoverBackgroundColor: String,
        // 子菜单鼠标指向的背景色
        hoverSubBackgroundColor: String,
        // 组标题颜色
        groupTitleColor: String,
        // 选中的背景颜色
        activeBackgroundColor: String
    },
    computed: {
        attr() {
            return this.$globalAttrs.append(this.$attrs, 'menu', ['backgroundColor', 'textColor', 'activeTextColor']);
        },
        menus() {
            if (!this.indexKey) {
                dataUtil.realArrayIndex(this.list, 'children');
            }
            return this.list;
        }
    }
}
</script>

<style lang="scss" scoped>
.bk-menu {
    width: 100%;
    max-height: 100vh;
}
</style>