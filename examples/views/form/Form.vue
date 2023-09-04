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

<style scoped>

</style>
