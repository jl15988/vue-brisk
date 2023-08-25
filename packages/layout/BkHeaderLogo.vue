<template>
    <div class="bk-header-logo" :style="{color: $config.globalAttrs.headerLogo.color}">
        <router-link :to="to">
            <slot>
                <h1 v-if="title && !menu.opened">{{ title.substr(0, 1).toUpperCase() }}</h1>
            </slot>
            <transition-group v-if="title" name="logo-title">
                <h1 v-if="menu.opened" key="header-title">{{ title }}</h1>
            </transition-group>
        </router-link>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "BkHeaderLogo",
    props: {
        to: {
            type: String,
            default: '/'
        },
        title: String
    },
    computed: {
        ...mapGetters(['menu'])
    }
}
</script>

<style lang="scss" scoped>
.bk-header-logo {
    height: 60px;
    line-height: 60px;
    width: 100%;
    text-align: center;

    h1 {
        font-size: 20px;
        display: inline-block;
        margin: 0 0 0 10px;
    }
}
</style>
<style>
.bk-header-logo img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
</style>