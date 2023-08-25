import BkContainer from "./layout/BkContainer";
import BkHeader from "./layout/BkHeader";
import BkHeaderLogo from "./layout/BkHeaderLogo";
import BkTable from "./data/BkTable/BkTable";
import BkForm from "./from/BkForm/BkForm";
import BkMenu from "./navigation/BkMenu/BkMenu";
import BkMenuItem from "./navigation/BkMenu/BkMenuItem";
import BkBreadcrumb from "./navigation/BkBreadcrumb";
import BkMainContainer from "./layout/BkMainContainer";
import dealGlobalAttr from "./utils/dealGlobalAttr";
import cssUtil from "./utils/cssUtil";
import './assets/scss/index.scss';

const components = [
    BkContainer,
    BkMainContainer,
    BkHeader,
    BkHeaderLogo,
    BkTable,
    BkForm,
    BkMenu,
    BkMenuItem,
    BkBreadcrumb
]

const install = function (Vue, options) {
    if (install.installed) return;

    const config = Vue.prototype.$config = dealGlobalAttr.deepAppend(Vue.prototype.$config);

    const cssObj = {
        '--menu-backgroundColor': config.globalAttrs.menu.backgroundColor,
        '--layout-sideWith': config.globalAttrs.layout.sideWith,
    }
    cssUtil.dealVar(cssObj);

    Vue.prototype.$globalAttrs = dealGlobalAttr;
    // 循环全局注册组件
    components.forEach(item => {
        Vue.component(item.name, item);
    });
};

// 判断是否时直接引入文件，如果是，就不用调用Vue.use，script直接引用

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
};