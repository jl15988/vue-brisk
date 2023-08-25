import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '../packages/assets/scss/index.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueBrisk from '../packages/index';
import config from "./config";

Vue.prototype.$config = config;

Vue.use(ElementUI);
Vue.use(VueBrisk);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
