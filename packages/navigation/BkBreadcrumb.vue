<template>
    <el-breadcrumb separator="/" class="bk-breadcrumb">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }" key="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item
                v-for="breadcrumb in breadcrumbs"
                :to="{path: breadcrumb.fullPath}"
                :key="breadcrumb.path">
                {{ breadcrumb.meta.title }}
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    name: "BkBreadcrumb",
    computed: {
        breadcrumbs() {
            const route = this.$route;
            let matched = route.matched;

            return matched.filter(item => item.meta && item.meta.title).map((item, index) => {
                if (index === matched.length) {
                    item.fullPath = '';
                    item.path = '';
                    return item;
                }
                return item;
            });
        }
    }
}
</script>

<style scoped>
.bk-breadcrumb {
    font-size: 14px;
}
</style>