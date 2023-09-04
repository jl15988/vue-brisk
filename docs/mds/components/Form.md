#### 1. 轻表单（BkForm）🎹

> [!Warning]
>
>  不支持`rules`属性，替换为verify动态方法

结合实际开发，我们会发现，在创建表单时会占用大量的代码空间，尤其是表单验证、表单项，大量的不同属性重复功能会大大拉低开发效率，所以我们从问题出发，解决代码过长、代码重复、效率低下问题。

对于表单验证，最常见的是必填，所以我们吧必填项写入进表单组件，自动生成（在 el-form-item 上添加 `require` 属性即可，注意不是`required`，表单组件会根据 label 做出默认的提示），对于复杂的表单验证，你可以使用 verify 属性来处理。

```vue
<template>
    <bk-form :model="formData" ref="form" :verify="verifyHandle" :btn-texts="['确定']" @submit="onSubmit">
        <el-form-item label="姓名" prop="name" require message="请选择姓名">
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
    </bk-form>
</template>

<script>

export default {
    name: "Form",
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
        onSubmit() {
            console.log('Form submit');
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$message.success("Form submit");
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        verifyHandle(props, vn) {
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



##### 📃 属性

| 参数<div style="width: 100px"></div> | 说明                                                         | 类型                               | 可选择      | 默认值 |
| ------------------------------------ | ------------------------------------------------------------ | ---------------------------------- | ----------- | ------ |
| btn                                  | 开启默认按钮，默认按钮包括取消和提交。                       | Boolean                            | true，false | false  |
| btn-texts                            | 默认按钮显示的文字，设置该属性可以不开启默认按钮。第一个参数为提交按钮，第二个为取消按钮。 | Array(String)                      | -           | -      |
| verify                               | 校验函数，通过该函数，你可以添加校验规则，与require不冲突，如果返回的的校验中含有必填校验，则优先为自定义的校验。<br />返回不同类型有不同效果：<li>类型为 String，则直接提示</li><li>类型为 Object，则直接添加为一项校验</li><li>类型为 Array，则为校验数组</li><li>类型为 Function，则为自定义校验，参数为 {props, vn}，props中包含组件含有的属性，如label、prop等；vn为组件的VNode。</li> | Function(props: Object, vn: VNode) | -           | -      |

##### 🔗 事件

| 参数   | 说明                                        | 回调参数 |
| ------ | ------------------------------------------- | ------- |
| submit | 开启 btn 生效，点击提交按钮时触发。 | - |
| cancel | 开启 btn 生效，点击取消按钮时触发。 | - |

##### 🎨 插槽

| 名称   | 说明                                                     |
| ------ | -------------------------------------------------------- |
| footer | 用于自定义底部组件，可以自定义底部按钮，在默认按钮之下。 |



#### 2. 表单项（el-form-item）🎹

##### 📃 属性

| 参数    | 说明               | 类型    | 可选择      | 默认值 |
| ------- | ------------------ | ------- | ----------- | ------ |
| require | 是否必填           | Boolean | true，false | false  |
| message | 校验必填的提示信息 | String  | -           | -      |