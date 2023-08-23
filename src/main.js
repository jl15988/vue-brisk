import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/index.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import config from "@/config";
import dealGlobalAttr from "@/utils/dealGlobalAttr";

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$config = config
Vue.prototype.$globalAttrs = dealGlobalAttr

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
