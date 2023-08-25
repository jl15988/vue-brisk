import config from "../config";
import StringUtil from "./StringUtil";

export default {
    pickAttr(attrs, type, key, globalKey) {
        const globalAttr = this.getByKeys(type, [globalKey]);
        return attrs[key] ? attrs[key] : globalAttr[globalKey];
    },
    /**
     * 对attrs附加全局属性，attrs优先
     * @param attrs attrs
     * @param type 类型
     * @param keys 要附加的属性，否则全部
     * @returns {*} new attrs
     */
    append(attrs, type, keys) {
        const globalAttr = this.getByKeys(type, keys);
        return Object.assign({}, globalAttr, StringUtil.toHumpObject(attrs));
    },
    /**
     * 将全局变量转为style的var变量，attrs优先
     * @param attrs 属性
     * @param type 类型
     * @param keys 要转变的属性，否则全部
     */
    varStyle(attrs, type, keys) {
        const globalAttr = Object.assign({}, this.getByKeys(type, keys), this.filterKey(attrs, keys));
        const style = {};
        for (let globalAttrKey in globalAttr) {
            style[`--${type}-${globalAttrKey}`] = globalAttr[globalAttrKey];
        }
        return style;
    },
    /**
     * 全局变量过滤key值
     * @param type
     * @param keys
     * @returns {{}|*}
     */
    getByKeys(type, keys) {
        const globalAttrs = config.globalAttrs;
        const attrKeys = Object.keys(globalAttrs);
        if (!attrKeys.includes(type)) {
            // console.error('There is no current type in the global attribute: ' + type);
            return {};
        }
        const attr = globalAttrs[type];
        // 只附加keys存在的
        if (keys && keys.length) {
            return this.filterKey(attr, keys);
        } else {
            return attr;
        }
    },
    /**
     * 过滤key
     * @param attrs 属性
     * @param keys key
     */
    filterKey(attrs, keys) {
        const attr = {};
        if (keys && keys.length) {
            for (let key of keys) {
                const attrValue = attrs[key];
                if (attrValue !== null && attrValue !== undefined) {
                    attr[key] = attrValue;
                }
            }
        }
        return attr;
    },
    /**
     * 将默认的config深度附加到con
     */
    deepAppend(con) {
        return this.toDeepAppend(config, con);
    },
    /**
     * 多级对象深替换附加，config2覆盖config1
     * @param config1
     * @param config2
     * @returns {{}|*}
     */
    toDeepAppend(config1, config2) {
        let cur = {};
        const config1Keys = Object.keys(config1);
        for (let config1Key in config1) {
            if (!config2[config1Key]) {
                cur[config1Key] = config1[config1Key];
            } else if (config1[config1Key] instanceof Object && config2[config1Key] instanceof Object) {
                // 如果两者皆为对象，则循环深度循环处理
                cur[config1Key] = this.toDeepAppend(config1[config1Key], config2[config1Key]);
            } else {
                // 若1为非对象类型，则替换为2
                cur[config1Key] = config2[config1Key];
            }
        }
        // 2中有1中没有的，直接赋值
        for (let config2Key in config2) {
            if (!config1Keys.includes(config2Key)) {
                cur[config2Key] = config2[config2Key];
            }
        }
        return cur;
        // let cur = {};
        // for (let config1Key in config1) {
        //     if (typeof config1[config1Key] === "object" && typeof config2[config1Key] === "object") {
        //         // 如果两者皆为对象，则循环深度循环处理
        //         cur[config1Key] = this.toDeepAppend(config1[config1Key], config2[config1Key]);
        //     } else if (typeof config1[config1Key] !== "object") {
        //         // 若1为非对象类型，则替换为2
        //         cur[config1Key] = config2[config1Key];
        //     } else {
        //         // 否则
        //         return Object.assign({}, config1, config2);
        //     }
        // }
        // return cur;
    }
}