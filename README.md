# vue-cli多页面

> A Vue.js project

项目ajax请求用的是axios
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 多页面配置
vue2.0版本多页面入口,是由webpack配置来完成的
比如说，我的项目文件结构如下
```
    webpack
      |---build
      |---src
        |---libs 工具类
        |---components 公共组件，如button
        |---template 
          |---index.html 公用的HTML模板
        |---wechat  各个模块
          |---index    index模块
            |---index.js
            |---index.vue
          |---order       order模块
            |---order.js
            |---order.vue
  ```
如果要修改wechat文件夹名字，则需要修改webpack.base.dev.js文件和webpack.prod.conf.js

var pages = utils.getEntry('./src/wechat/**/*.js');


## 参考
[vue-router2.0](http://gold.xitu.io/entry/57fcd8088ac2470058cadd6e)
[luchanan的vue多页面配置](https://github.com/luchanan/vue2.0-multi-page)
