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

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    // 字体抗锯齿
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    margin: 0;
    padding: 0;
}
</style>
<script>
import menus from './data/menus.json'
import {mapGetters} from "vuex";
import BkContainer from "../packages/layout/BkContainer";
import winResize from "./mixin/winResize";

export default {
    components: {BkContainer},
    mixins: [winResize],
    data() {
        return {
            menus: []
        }
    },
    computed: {
        ...mapGetters(['menu'])
    },
    methods: {
        openedChange(open) {
            this.$store.commit('setting/CHANGE_MENU_STATUS', open);
        },
        menuSelect(index, indexPath) {
            console.log(index, indexPath)
        }
    },
    created() {
        this.menus = menus;
    }
}
</script>
