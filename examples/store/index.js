import Vue from 'vue'
import Vuex from 'vuex'
import setting from "./modules/setting";

Vue.use(Vuex)

export default new Vuex.Store({
    getters: {
        menu: state => state.setting.menu
    },
    modules: {
        setting
    }
})
