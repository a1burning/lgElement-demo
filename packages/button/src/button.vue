<template>
  <div>
    <button v-bind="$attrs" @click="handleClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  inheritAttrs: false,
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
      // 阻止表单自动提交事件
      evt.preventDefault();
    }
  }
}
</script>

<style>

</style>