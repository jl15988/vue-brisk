<template>
    <el-header class="bk-header" :height="height">
        <el-button
            :icon="`el-icon-s-${menu.opened ? 'fold' : 'unfold'}`"
            type="text"
            class="menu-button"
            @click="menuButtonHandle"
            :style="{lineHeight: height}"></el-button>
        <template v-if="breadcrumb">
            <bk-breadcrumb :style="{lineHeight: height}"></bk-breadcrumb>
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
        ...mapGetters(['menu']),
        height() {
            return this.$globalAttrs.pickAttr(this.$attrs, 'layout', 'height', 'headerHeight');
        }
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
        float: left;
        padding: 0;
        color: #303133;
    }

    .bk-breadcrumb {
        margin-left: 10px;
        display: inline-block;
    }
}
</style>