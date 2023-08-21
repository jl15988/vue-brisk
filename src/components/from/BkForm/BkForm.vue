<template>
    <el-form
        v-bind="$attrs"
        v-on="$listeners"
        :rules="ruleList"
        :validate-on-rule-change="false">
        <slot></slot>
        <el-form-item v-if="defaultButtons">
            <el-button @click="onCancel">取消</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
        <slot name="footer"></slot>
    </el-form>
</template>

<script>
export default {
    name: "BkForm",
    props: {
        defaultButtons: Boolean,
        verify: Function
    },
    data() {
        return {
            ruleList: {}
        }
    },
    methods: {
        onSubmit() {
            this.$emit('submit');
        },
        onCancel() {
            this.$emit('cancel');
        },
        // 生成Rule
        dealRule(slot) {
            const componentOptions = slot.componentOptions;
            let trigger = "change";
            let operate = "选择";

            const props = componentOptions.propsData;
            const attrs = slot.data.attrs;

            // 获取form-item中的内容组件，根据组件更新trigger和message操作
            if (componentOptions.children) {
                const children = slot.componentOptions.children;
                for (let child of children) {
                    if (['el-input', 'el-input-number', 'input'].includes(child.componentOptions.tag)) {
                        trigger = "blur";
                        operate = "输入";
                    } else if (child.componentOptions.tag === 'el-upload') {
                        trigger = 'change';
                        operate = '上传';
                    }
                }
            }

            let message = "";
            if (this.verify) {
                message = this.verify(props, slot);
                if (message instanceof Function) {
                    // 如果是函数，则识别为自定义校验规则
                    return [{
                        validator: message,
                        trigger: trigger
                    }]
                } else if (message instanceof Object) {
                    // 如果是对象或数组，则识别为校验规则
                    return [message];
                } else if (message instanceof Array) {
                    return message;
                }
            }
            if (!message && (attrs.require || attrs.require === '')) {
                // 如果为空，且设置为必填，则赋值默认的提示信息
                const messageProp = attrs.message;
                message = messageProp ? messageProp : `请${operate}${props.label || '内容'}`;
            }
            return [{
                required: true,
                message: message,
                trigger: trigger
            }]
        }
    },
    mounted() {
        this.$nextTick(() => {
            const ruleList = {};

            // 获取插槽组件，根据组件设置默认属性
            const slots = this.$slots.default;
            for (const slot of slots) {
                const componentOptions = slot.componentOptions;
                if (componentOptions) {
                    if (componentOptions.tag === "el-form-item") {
                        const props = componentOptions.propsData;
                        ruleList[props.prop] = this.dealRule(slot);
                    }
                }
            }
            this.ruleList = ruleList;
        });
    }
}
</script>

<style scoped>

</style>