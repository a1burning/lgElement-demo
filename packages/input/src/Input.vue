<template>
  <div>
    <input :type="type" :value="value" @input="handleInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  name: 'LgInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (evt) {
      this.$emit('input', evt.target.value)
      // 找父组件
      const findParent = parent => {
        // 循环找父组件
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      // 获取如果找到了LgFromItem找到了就触发其组件的validate方法
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>

</style>