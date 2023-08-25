/*
配置项和全局属性
全局属性优先级低于标签属性，属性为 EUI 自有属性
 */
export default {

    // 全局组件属性
    globalAttrs: {
        layout: {
            // 头高度
            headerHeight: '60px',
            // 页脚高度
            footerHeight: '40px',
            // 主题内容高度，fully为自动计算，窗口高度减去头高度和页脚高度
            mainHeight: 'fully',
            // 侧边栏宽度
            sideWith: '240px'
        },
        // 头logo
        headerLogo: {
            color: '#dbebff'
        },
        // 表格
        table: {
            // ...可添加所有el-able的属性
            border: true,
            stripe: true
        },
        // 菜单
        menu: {
            // 整体背景色
            backgroundColor: "#409EFF",
            // 子菜单背景色
            subBackgroundColor: '#006be0',
            // 鼠标指向的背景色
            hoverBackgroundColor: '#50aaff',
            // 子菜单鼠标指向的背景色
            hoverSubBackgroundColor: '#005cc0',
            // 选中的背景颜色
            activeBackgroundColor: '',
            // 文字颜色
            textColor: '#dbebff',
            // 激活的文字颜色
            activeTextColor: '#fffd46',
            // 组标题颜色
            groupTitleColor: '#80bcff'
        }
    }
}