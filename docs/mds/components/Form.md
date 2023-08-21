#### 1. 轻表单（FastForm）🎹

>  不支持`rules`属性

结合实际开发，我们会发现，在创建表单时会占用大量的代码空间，尤其是表单验证、表单项，大量的不同属性重复功能会大大拉低开发效率，所以我们从问题出发，解决代码过长、代码重复、效率低下问题。

对于表单验证，最常见的是必填，所以我们吧必填项写入进表单组件，自动生成（在 el-form-item 上添加 `require` 属性即可，注意不是`required`，表单组件会根据 label 做出默认的提示），对于复杂的表单验证，你可以使用 verify 属性来处理。

```vue
<template>
    <fast-form :model="formData" :format-message="dealMessage">
        <el-form-item label="姓名" prop="name" require message="请选择xx">
            <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" require>
            <el-input v-model="formData.sex"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model.number="formData.age"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address" require>
            <el-select v-model="formData.address">
                <el-option value="" label="无">无</el-option>
                <el-option value="0" label="青岛">青岛</el-option>
                <el-option value="1" label="济南">济南</el-option>
            </el-select>
        </el-form-item>
    </fast-form>
</template>

<script>
import FastForm from "@/components/from/FastForm/FastForm";
export default {
    name: "Form",
    components: {FastForm},
    data() {
        return {
            formData: {
                name: '',
                sex: '',
                age: '',
                address: ''
            }
        }
    },
    methods: {
        dealMessage(props, item) {
            if (props.prop === "age") {
                return (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('年龄不能为空'));
                    }
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                };
            }
        }
    }
}
</script>
```



##### 属性

| 参数            | 说明                                                         | 类型     | 可选择      | 默认值 |
| --------------- | ------------------------------------------------------------ | -------- | ----------- | ------ |
| default-buttons | 开启默认按钮，默认按钮包括取消和提交                         | Boolean  | true，false | false  |
| verify          | 校验函数，通过该函数，你可以对添加校验规则，返回类型为 String，则直接提示，类型为对象，则直接添加当前对象为校验，类型为数组，则为校验数组，类型为函数，则为自定义校验 | Function | -           | -      |

##### 事件

| 参数   | 说明                                        | 回调参数 |
| ------ | ------------------------------------------- | ------- |
| submit | 开启default-buttons生效，点击提交按钮时触发 | - |
| cancel | 开启default-buttons生效，点击取消按钮时触发 | - |