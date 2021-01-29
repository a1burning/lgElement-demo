// 导入插件
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = [
  {
    // 入口
    input: 'index.js',
    // 出口
    output: [
      {
        file: 'dist/index.js',
        // 配置打包模块化的方式 es是es6的方式 cjs是commonJS的方式
        format: 'es'
      }
    ],
    // 插件
    plugins: [
      // Vue插件
      vue({
        // 把单文件组件中的样式，插入到html中的style标签里
        css: true,
        // 把组件转换成render函数
        compileTemplate: true
      }),
      // 对代码进行压缩
      terser()
    ]
  }
]