<template>
    <el-table-column v-bind="$attrs">
        <template v-if="$attrs.children && $attrs.children.length > 0" v-for="child in $attrs.children">
            <bk-table-column v-bind="child"></bk-table-column>
        </template>
    </el-table-column>
</template>

<script>
export default {
    name: "BkTableColumn",
}
</script>

<style scoped>

</style>