<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'LgForm',
  provide () {
    return {
      // 值就是当前的组件对象，this
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  methods: {
    // 需要一个回调函数
    validate(cb) {
      // 假设第一层组件就是form-item组件

      // 先用filter过滤有prop的form-item组件
      // 然后用map调用每一个组件的validate方法
      // 最后返回一个数组tasks，里面的元素就是执行完validate之后的promise对象
      const tasks = this.$children
        .filter(child => child.prop)
        .map(child => child.validate())

      // 判断所有的数组都完成之后如果都成功就返回true，如果有一个失败就返回false
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>

<style>

</style>