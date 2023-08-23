<template>
    <el-container>
        <el-aside
            class="bk-aside"
            :class="{'opened': menu.opened}"
            :style="{'--menu-backgroundColor': $config.globalAttrs.menu.backgroundColor, '--layout-sideWith': $config.globalAttrs.layout.sideWith}">
            <div class="bk-menu-container">
                <bk-header-logo title="vue-brisk">
                    <img :src="require('@/assets/logo.png')"/>
                </bk-header-logo>
                <bk-menu
                    :list="menus"
                    @select="selectHandle"
                    index-key="id"
                    :collapse="!menu.opened"
                    :collapse-transition="false"
                ></bk-menu>
            </div>
        </el-aside>
        <el-container>
            <bk-header breadcrumb></bk-header>
            <el-main class="bk-container-main" :style="mainStyle">
                <slot></slot>
            </el-main>
            <el-footer
                class="bk-footer"
                :height="$config.globalAttrs.layout.footerHeight"
                :style="{lineHeight: $config.globalAttrs.layout.footerHeight}">&copy; jl15988 版权所有
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import menus from '@/data/menus.json';
import BkMenu from "@/components/navigation/BkMenu/BkMenu";
import BkHeader from "@/components/layout/BkHeader";
import {mapGetters} from "vuex";
import BkHeaderLogo from "@/components/layout/BkHeaderLogo";

export default {
    name: "BkContainer",
    components: {BkHeaderLogo, BkHeader, BkMenu},
    data() {
        return {
            menus: []
        }
    },
    computed: {
        ...mapGetters(['menu']),
        mainStyle() {
            const globalLayout = this.$config.globalAttrs.layout;
            if (globalLayout.mainHeight === 'fully') {
                return {
                    height: `calc(100vh - (${globalLayout.headerHeight} + ${globalLayout.footerHeight}))`
                }
            }
            return {
                height: globalLayout.mainHeight
            }
        }
    },
    methods: {
        selectHandle(index, indexPath) {
            console.log(index, indexPath)
        }
    },
    mounted() {
        this.menus = menus;
    }
}
</script>

<style lang="scss" scoped>
.bk-aside {
    overflow-x: hidden;
    overflow-y: auto;
    width: auto !important;

    &.opened .bk-menu-container {
        width: var(--layout-sideWith);
    }

    .bk-menu-container {
        width: 64px;
        transition: width .2s;
    }
}

.bk-container-main {
    overflow-x: hidden;
    overflow-y: auto;
}

.bk-footer {
    color: #aaa;
}
</style>