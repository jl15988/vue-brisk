<h2>安装</h2>



#### npm安装

通过一下命令安装vue-brisk。

```shell
npm i vue-brisk -S
```



#### CDN引入

如果为了减小打包体积，可以使用CDN引入。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-brisk/lib/vue-brisk.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-brisk/lib/vue-brisk.umd.min.js"></script>
```



CDN示例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
		<link rel="stylesheet" href="https://unpkg.com/vue-brisk/lib/vue-brisk.css">
	</head>
	<body>
		<div id="app">
			<bk-table :labels="labels" :data="list">
				<template slot="status-header" slot-scope="scope">
					状态 <i class="el-icon-edit-outline data-table-header-icon"></i>
				</template>
				<template #status="{row}">
					{{ row.age > 20 ? '符合' : '不符合' }}
				</template>
			</bk-table>
		</div>
	</body>
	<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
	<script src="https://unpkg.com/element-ui/lib/index.js"></script>
	<script>
		Vue.prototype.$config = {
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
	</script>
	<script src="https://unpkg.com/vue-brisk@1.0.3/lib/vue-brisk.umd.min.js"></script>

	<script>
		new Vue({
			el: '#app',
			data: function() {
				return {
					visible: false,
					labels: [{
						type: 'selection'
					}, {
						label: '序号',
						type: 'index'
					}, {
						label: '姓名',
						prop: 'name',
						width: '200'
					}, {
						label: '性别',
						prop: 'sex',
						handle: (row) => {
							if (row.sex === '0') {
								return "女";
							} else {
								return "男";
							}
						}
					}, {
						label: '年龄',
						prop: 'age'
					}, {
						label: '配送信息',
						children: [{
							label: '地址',
							children: [{
								label: '省份',
								prop: 'province'
							}, {
								label: '市',
								prop: 'city'
							}]
						}]
					}, {
						label: '状态',
						prop: 'status',
						slot: 'status'
					}],
					list: [{
						name: '张三',
						sex: '1',
						age: '23',
						province: '山东',
						city: '青岛'
					}, {
						name: '王五',
						sex: '1',
						age: '20'
					}, {
						name: '刘晓',
						sex: '0',
						age: '23'
					}]
				}
			}
		})
	</script>
</html>
```

