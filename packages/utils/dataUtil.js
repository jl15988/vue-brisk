export default {
    /**
     * 解析labels，处理data，用于处理表格数据
     */
    labelDataCope(labels, data) {
        if (!labels || !data || !data instanceof Array || !data.length) {
            return data;
        }
        // 提取带有处理方法的label
        const handles = {};
        labels.map(label => {
            if (label.handle && label.handle instanceof Function) {
                handles[label.prop] = label.handle;
            }
        });
        const handleKeys = Object.keys(handles);
        // 处理数据
        const datas = data;
        for (let i = 0; i < datas.length; i++) {
            const datum = datas[i];
            for (let key in datum) {
                if (handleKeys.includes(key)) {
                    datum[key] = handles[key](datum, i);
                }
            }
        }
        return datas;
    },
    /**
     * 处理多级数组index，用于添加菜单默认index
     */
    realArrayIndex(arr, key, index) {
        if (!arr || !arr instanceof Array || !arr.length) {
            return arr;
        }
        for (let i = 0; i < arr.length; i++) {
            const cIndex = String(i + 1);
            if (arr[i] instanceof Object) {
                arr[i].defaultIndex = String(index ? index + "-" + cIndex : cIndex);
            }
            if (arr[i][key] instanceof Array) {
                this.realArrayIndex(arr[i][key], key, cIndex);
            }
        }
    }
}