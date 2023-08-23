<template>
    <el-menu
        v-bind="attr"
        v-on="$listeners"
        class="bk-menu"
        :style="$globalAttrs.varStyle($props, 'menu', ['subBackgroundColor', 'hoverBackgroundColor', 'hoverSubBackgroundColor', 'groupTitleColor'])">
        <template v-for="menu in list">
            <bk-menu-item
                :data="menu"
                :index-key="indexKey"
                :router="$attrs.router"
            ></bk-menu-item>
        </template>
    </el-menu>
</template>

<script>
import BkMenuItem from "@/components/navigation/BkMenu/BkMenuItem";

export default {
    name: "BkMenu",
    components: {BkMenuItem},
    props: {
        list: Array,
        indexKey: String,
        // 子菜单背景色
        subBackgroundColor: String,
        // 激活的背景色
        hoverBackgroundColor: String,
        // 子菜单激活的背景色
        hoverSubBackgroundColor: String,
        // 组标题颜色
        groupTitleColor: String
    },
    computed: {
        attr() {
            return this.$globalAttrs.append(this.$attrs, 'menu', ['backgroundColor', 'textColor', 'activeTextColor']);
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