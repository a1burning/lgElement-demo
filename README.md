## 测试环境

1. 安装测试环境

```bash
yarn add jest @vue/test-utils vue-jest babel-jest -D -W
```

2. 在package.json中创建测试脚本

```bash
"scripts": {
  "test": "jest"
}
```

3. 配置jest.config.js

```js
module.exports = {
  // testMatch 去哪里找测试文件
  // 正则表达式：寻找__tests__下面的js、jsx、ts、tsx文件
  "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
  // 导入模块的后缀
  "moduleFileExtensions": [
    "js",
    "json",
    // 告诉Jest处理 `*.vue` 文件
    "vue"
  ],
  "transform": {
    // 用 `vue-jest` 处理 `*.vue` 文件: 编译单文件组件
    ".*\\.(vue)$": "vue-jest",
    // 用 `babel-jest` 处理 js ：降级处理
    ".*\\.(js)$": "babel-jest"
  }

}
```

4. 配置`babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ]
}
```

5. 需要安装babel桥接，这个需要的时候就去vue-test去查

```bash
yarn add babel-core@bridge -D -W
```

## Rollup打包

### 打包单个文件
1. 安装依赖

```bash
yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler -D -W
```

2. 配置文件

在button目录中创建 rollup.config.js

```js
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
```

3. 在package.json里面配置

```bash
"scripts": {
    # 打包的时候默认加载rollup.config.js文件
    "build": "rollup -c" 
},
```

4. 运行打包命令

> 可以进入button文件夹启动yarn build  
> 还可以在根目录使用yarn workspace

```bash
yarn workspace csf-button-demo run build
```

### 打包所有文件

1. 除了打包单个文件需要的依赖，还需要三个依赖

```bash
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

2. 项目的根目录下创建配置文件rollup.config.js

> 因为所有组件的打包方式一样，所以可以给所有的组件动态生成rollup的配置文件，这个配置文件本质上是一个node程序，其作用是给rollup下面的所有包生成配置。

```js
import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// 环境变量
const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    // Dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true,
    // 把 css 放到和js同一目录
    extract: true
  })
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径为根路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // 过滤，只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map(item => {
    // 因为配置了rollup的json插件，所以可以使用模块加载，返回的pkg就是json对象
    const pkg = require(path.resolve(root, item, 'package.json'))
    // return对象，return的对象就是rollup的每个组件的配置
    return {
      // 拼接绝对路径
      input: path.resolve(root, item, 'index.js'),
      // 两种类型
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        },
      ],
      // 插件
      plugins: plugins
    }
  })
```


3. 给根目录下的package.json配置脚本build

```bash
"scripts": {
  ...
  "build": "rollup -c"
}
```

4. 给所有的组件中的package.json中配置main和module，这个是打包的出口，也是别人使用的入口。

```bash
"main": "dist/cjs/index.js",
"module": "dist/es/index.js",
```

5. 根目录下运行打包