所有scss变量都在`src/assets/scss/params.scss`中，目前包括一下参数。

```scss
// 头logo标题颜色
$header-logo-color: #dbebff;

/*
侧边栏
 */
$side-bg-color: #409EFF; // 整体背景色
$side-font-color: #dbebff; // 文字颜色
$side-group-title-color: #80bcff; // 分组标题颜色
$side-hover-bg-color: #50aaff; // 激活背景色
$side-group-bg-color: #006be0; // 组背景色
$side-hover-group-bg-color: #005cc0; // 组激活背景色

/*
layout
 */
$footer-height: 40px; // 页脚高度
$header-height: 60px; // 头高度
$main-height: calc(100vh - #{$footer-height} - #{$header-height}); // 主视图高度
$side-width: 240px; // 侧边栏宽度
```