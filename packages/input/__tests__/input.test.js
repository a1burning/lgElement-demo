// 导入input组件
import input from '../src/input.vue'
// 导入挂载组件API
import { mount } from '@vue/test-utils'
import { toNumber } from 'lodash'

// describe创建代码块，把测试放到代码块中
// 第一个参数是代码块的名字，第二个参数是测试函数
describe('lg-input', () => {
  // 测试：input组件是否是我们希望的文本框
  // test方法，第一个参数是测试描述
  test('input-text', () => {
    // 通过mount对组件进行挂载，这步只是内存中的挂载，返回一个包裹器
    const wrapper = mount(input)
    // 判断这个包裹器里判断内容是否包含input type=text
    expect(wrapper.html()).toContain('input type="text"')
  })

  // 测试：密码框是否是正确的
  test('input-password', () => {
    const wrapper = mount(input, {
      // 在里面传props的参数，type是password
      propsData: {
        type: 'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  // 测试：密码框是否是正确的
  test('input-password', () => {
    const wrapper = mount(input, {
      // 在里面传props的参数，把value也传入
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    // 调用wrapper的props方法，这个方法可以获取生成的组件的props对象，这个方法中也可以传递参数，如果传递value那么获取的是生成组件的props，value属性的值
    // 拿到值判断其是否是admin，用toBe函数
    expect(wrapper.props('value')).toBe('admin')
  })

  // 测试：快照
  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    // 将对象拍一个快照，记录到一个文本文件中
    // wrapper.vm.$el 找到这个组件对应的DOM对象，toMatchSnapshot就是拍一个快照
    // 第一次调用，会把这个内容存储到特定的文本文件中
    // 第二次调用，会把这个内容和快照的内容进行对比，如果不一样就报错。
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})