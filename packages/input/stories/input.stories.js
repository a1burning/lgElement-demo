import LgInput from '../'

// 导出对象，title是一级标题
export default {
  title: 'LgInput',
  component: LgInput
}

// 写两个story ，名称是二级标题
// 这里返回一个对象，如果不加小括号就是代码块，加了小括号就是返回的对象
export const Text = () => ({
  components: { LgInput },
  template: '<lg-input v-model="value"></lg-input>',
  data () {
    return  {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
    return  {
      value: 'admin'
    }
  }
})