<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <!-- 验证失败的时候显示验证失败的原因 -->
      <p v-if="errMessage"> {{ errMessage }} </p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'LgFormItem',
  // 通过form获取表单对象
  inject: ['form'],
  props: {
    // 标签名称
    label: {
      type: String
    },
    // 验证字段的名字
    prop: {
      type: String
    }
  },
  data () {
    return {
      errMessage: ''
    }
  },
  mounted () {
    this.$on('validate', () =>{
      this.validate()
    })
  },
  methods: {
    validate () {
      // 没有传递prop属性就不验证
      if (!this.prop) return
      // 验证的数据
      const value = this.form.model[this.prop]
      // 验证的规则
      const rules = this.form.rules[this.prop]
      // 描述信息，对象，属性是prop，值是规则
      const descriptor = { [this.prop] : rules }
      // 创建validator对象，将描述信息传递
      const validator = new AsyncValidator(descriptor)
      // 进行验证，方法返回一个promise，所以可以直接return。第一个参数是对象，属性是prop，值是表单的值，第二个参数是回调，错误信息就展示。
      return validator.validate({ [this.prop ] : value }, errors => {
        if(errors){
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>