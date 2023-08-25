<template>
    <el-container>
        <el-aside
            class="bk-aside"
            :class="{'opened': this.sideOpened}">
            <div class="bk-menu-container">
                <bk-header-logo title="vue-brisk" :opened="sideOpened">
                    <slot name="header-logo"></slot>
                </bk-header-logo>
                <bk-menu
                    :list="menus"
                    @select="selectHandle"
                    :index-key="menusKey"
                    :collapse="!sideOpened"
                    :collapse-transition="false"
                ></bk-menu>
            </div>
        </el-aside>
        <el-container>
            <bk-header breadcrumb side-stretch :side-opened="sideOpened" @side-change="sideChange"></bk-header>
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
import BkMenu from "../navigation/BkMenu/BkMenu";
import BkHeader from "./BkHeader";
import BkHeaderLogo from "./BkHeaderLogo";

export default {
    name: "BkContainer",
    components: {BkHeaderLogo, BkHeader, BkMenu},
    props: {
        menusKey: String,
        menus: [],
        sideOpened: {
            type: Boolean,
            default: true
        }
    },
    computed: {
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
            this.$emit('menu-select', index, indexPath);
        },
        sideChange() {
            this.$emit('side-change');
        }
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