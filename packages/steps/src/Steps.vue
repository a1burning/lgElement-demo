<template>
  <!-- 外层结构 -->
  <div class="lg-steps">
    <!-- 中间贯穿的线 -->
    <div class="lg-steps-line"></div>
    <!-- 每一个步骤，循环遍历count，index是从1开始的 -->
    <div
      class="lg-step"
      v-for="index in count"
      :key="index"
      :style="{
        color: active >= index ? activeColor : defaultColor
      }"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LgSteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 1
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    defaultColor: {
      type: String,
      default: 'yellowgreen'
    }
  }
}
</script>

<style>
.lg-steps {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.lg-steps-line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 24px;
  right: 24px;
  transform: translateY(-50%);
  z-index: 1;
  background: rgb(223, 231, 239);
}

.lg-step {
  border: 2px solid;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 2;
  background-color: white;
  box-sizing: border-box;
}
</style>