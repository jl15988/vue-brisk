export default {
    namespaced: true,
    state: {
        menu: {
            opened: localStorage.getItem('menuStatus') === "1"
        }
    },
    mutations: {
        CHANGE_MENU_STATUS: (state, status) => {
            state.menu.opened = status;
            localStorage.setItem('menuStatus', status ? "1" : "0");
        }
    },
    actions: {}
}
