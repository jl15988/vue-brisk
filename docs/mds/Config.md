## Config配置

在src下有一个`config.js`文件，该文件用于全局参数配置。



> [!Note]
>
> 所有全局组件属性优先级都低于组件标签属性，如需单独设置样式，可通过组件标签设置。



#### 📃 属性

| 属性        | 说明                                                         | 类型   |
| ----------- | ------------------------------------------------------------ | ------ |
| globalAttrs | 全局组件属性，对于一些通用组件的属性可以配置全局属性，用以统一配置，支持的组件请见：[globalAttrs支持的组件属性](mds/Config?id=📃-globalattrs支持的组件属性) | Object |



#### 📃 globalAttrs支持的组件属性

| 组件       | 说明                                   | 参数                                                         |
| ---------- | -------------------------------------- | ------------------------------------------------------------ |
| layout     | 布局的参数                             | <li>headerHeight：头高度</li><li>footerHeight：页脚高度</li><li>mainHeight：主题内容高度，fully为自动计算，窗口高度减去头高度和页脚高度</li><li>sideWith：侧边栏宽度</li> |
| headerLogo | 用于设置头logo                         | color：头logo文字的颜色                                      |
| table      | 全局表格属性，支持el-table的所有属性。 | el-table的所有属性                                           |
| menu       | 菜单全局配置                           | <li>backgroundColor：整体背景色</li><li>subBackgroundColor：子菜单背景色</li><li>hoverBackgroundColor：激活的背景色</li><li>hoverSubBackgroundColor：子菜单激活的背景色</li><li>textColor：文字颜色</li><li>activeTextColor：激活的文字颜色</li><li>groupTitleColor：组标题颜色</li> |

