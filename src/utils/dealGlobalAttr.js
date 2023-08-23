import config from "@/config";
import StringUtil from "@/utils/StringUtil";

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
    }
}