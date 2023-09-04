export default {
    beforeMount() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            if (document.documentElement.clientWidth < 900) {
                this.$store.commit('setting/CHANGE_MENU_STATUS', false);
            }
        }
    }
}
