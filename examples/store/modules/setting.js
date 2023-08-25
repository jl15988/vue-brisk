export default {
    namespaced: true,
    state: {
        menu: {
            opened: localStorage.getItem('menuStatus') === "1"
        }
    },
    mutations: {
        CHANGE_MENU_STATUS: state => {
            state.menu.opened = !state.menu.opened;
            localStorage.setItem('menuStatus', state.menu.opened ? '1' : '0');
        }
    },
    actions: {}
}