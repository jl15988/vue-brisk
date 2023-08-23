export default {
    uuid(simple) {
        const uf = simple ? 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx' : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        let timestamp = new Date().getTime();
        let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
        return uf.replace(/[xy]/g, (c) => {
            let random = Math.random() * 16;
            if (timestamp > 0) {
                random = (timestamp + random) % 16 | 0;
                timestamp = Math.floor(timestamp / 16);
            } else {
                random = (perforNow + random) % 16 | 0;
                perforNow = Math.floor(perforNow / 16);
            }
            return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
        });
    },
    /**
     * 驼峰转连字符
     */
    toHyphen(str) {
        return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    },
    toHyphens(arr) {
        return arr.map(item => this.toHyphen(item));
    },
    toHyphenObject(obj) {
        const res = {};
        for (let objKey in obj) {
            res[this.toHyphen(objKey)] = obj[objKey];
        }
        return res;
    },
    /**
     * 连字符转驼峰
     */
    toHump(str) {
        return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
    },
    toHumps(arr) {
        return arr.map(item => this.toHump(item));
    },
    toHumpObject(obj) {
        const res = {};
        for (let objKey in obj) {
            res[this.toHump(objKey)] = obj[objKey];
        }
        return res;
    },
}