<template>
    <el-menu-item-group v-if="data.isGroup">
        <template slot="title">{{ data.title }}</template>
        <bk-menu-item
            v-for="(child, index) in data.children"
            :data="child"
            :index-key="indexKey"
            :key="index"
        ></bk-menu-item>
    </el-menu-item-group>
    <el-submenu
        v-else-if="data.children && data.children.length > 0"
        :index="indexHandle()">
        <template
            slot="title">
            <i v-if="data.icon" :class="data.icon"></i>
            <span>{{ data.title }}</span>
        </template>
        <bk-menu-item
            v-for="(child, index) in data.children"
            :data="child"
            :index-key="indexKey"
            :key="index"
        ></bk-menu-item>
    </el-submenu>
    <router-link v-else-if="linkKey" :to="linkHandle()">
        <el-menu-item
            :index="indexHandle()">
            <i v-if="data.icon" :class="data.icon"></i>
            <span slot="title">{{ data.title }}</span>
        </el-menu-item>
    </router-link>
    <el-menu-item
        v-else
        :index="indexHandle()">
        <i v-if="data.icon" :class="data.icon"></i>
        <span slot="title">{{ data.title }}</span>
    </el-menu-item>

</template>

<script>
import StringUtil from "@/utils/StringUtil";

export default {
    name: "BkMenuItem",
    props: {
        data: Object,
        index: String,
        indexKey: String,
        linkKey: String
    },
    methods: {
        indexHandle() {
            return this.indexKey ? this.data[this.indexKey] : StringUtil.uuid(true);
        },
        linkHandle() {
            return (this.linkKey ? this.data[this.linkKey] : this.data.path) || "";
        }
    }
}
</script>

<style scoped>

</style>