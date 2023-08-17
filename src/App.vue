<template>
    <div id="app">
        <bk-container>
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
import BkContainer from "@/components/layout/BkContainer";

export default {
    components: {BkContainer}
}
</script>