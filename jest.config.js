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