<template>
    <el-header class="bk-header">
        <el-button
            :icon="`el-icon-s-${menu.opened ? 'fold' : 'unfold'}`"
            type="text"
            class="menu-button"
            @click="menuButtonHandle"></el-button>
        <template v-if="breadcrumb">
            <bk-breadcrumb></bk-breadcrumb>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </el-header>
</template>

<script>
import BkBreadcrumb from "@/components/navigation/BkBreadcrumb";
import {mapGetters} from "vuex";

export default {
    name: "BkHeader",
    components: {BkBreadcrumb},
    props: {
        breadcrumb: Boolean
    },
    computed: {
        ...mapGetters(['menu'])
    },
    methods: {
        menuButtonHandle() {
            this.$store.commit('setting/CHANGE_MENU_STATUS');
        }
    }
}
</script>

<style lang="scss" scoped>
.bk-header {
    .menu-button {
        font-size: 24px;
        display: inline-block;
        line-height: $header-height;
        float: left;
        padding: 0;
        color: #303133;
    }

    .bk-breadcrumb {
        margin-left: 10px;
        display: inline-block;
        line-height: $header-height;
    }
}
</style>