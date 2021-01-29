<template>
  <!-- a标签的超链接由disabled控制，如果不禁用就天界href，类样式如果禁用就用禁用样式，如果没有下划线就用没有下划线样式 -->
  <a 
    :href="disabled ? null : href"
    :class="[disabled && 'disabled', underline? 'underline':'no-underline']">
      <!-- 插槽 -->
      <slot></slot>
    </a>
</template>

<script>
  export default {
    // 组件名称，后面的name是大写
    name: 'LgLink',
    props: {
      // 超链接
      href: {
        type: String
      },
      // 是否可点，默认不可点
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否有下划线，默认没有下划线
      underline: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
/* 不可点类样式，鼠标不可点 */
.disabled {
  cursor: not-allowed;
}
/* 没有下划线类样式 */
.no-underline {
  text-decoration: none;
}
/* 有下划线类样式 */
.underline {
  text-decoration: underline;
}
</style>