<template>
    <el-menu
        v-bind="$attrs"
        v-on="$listeners"
        class="bk-menu">
        <template v-for="menu in list">
            <bk-menu-item
                :data="menu"
                :index-key="indexKey"
                :default-link="!$attrs.router"
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
        indexKey: String
    }
}
</script>

<style lang="scss" scoped>
.bk-menu {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
}
</style>