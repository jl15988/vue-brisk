export default {
    /**
     * 解析labels，处理data
     */
    labelDataCope(labels, data) {
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
    }
}