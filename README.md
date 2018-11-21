# vue2.0 + node.js + MongoDB 全栈打造商城

## vue-cli 构建 SPA 应用

> 单页Web应用（single page web application，SPA）

- `npm install -g vue-cli`
- `vue init webpack-simple demo(项目名)`    //初始化简单型的webpack项目demo
- `vue init webpack demo2`  //初始化完整的webpack项目

```
 Project name imoocmall
? Project description A Vue.js project
? Author Crystal
? Vue build standalone
? Install vue-router? Yes   //路由
? Use ESLint to lint your code? No? //es6语法检查
? Set up unit tests (Y/n) //单元测试
? Setup e2e tests with Nightwatch? No   //端到端的测试
```

## 项目架构

- build 打包的配置文件所在的文件夹
   + build.js
   + check-version.js 版本检查
   + utils.js
   + webpack.base.conf.js
- config  webpack 对应的配置
- src 开发项目的源码
   + App.vue 入口组件
   + main.js 项目入口文件
- static 静态资源（图片）
- .babelrc ES6解析的配置
- .editorconfig  编辑器的配置
- .gitignore
- index.html 单页面入口
- package.json 项目基础配置
   + scripts 脚本命令
   + dependencies 项目本身依赖的库
   + devDependencies 开发依赖库（打包好之后就不需要了）
   + engines 所需要的引擎
   + browserslist 浏览器列表

## 路由

### 前端路由

- 根据不同的url地址展示不同的内容或页面
- 在单页面应用程序，大部分页面结构不变，只改变内容时使用
- 优点：用户体验好，不需每次从服务器全部获取
- 缺点：不利于SEO，使用浏览器的前进、后退键会重新发送请求

------
#### 动态路由

# 项目开发
## 配置 mock 数据
> 最新版本的vue-cli已经放弃dev-server.js，只需在webpack.dev.conf.js配置就行。
```js
const express = require('express')
const app = express()
const goodsData = require('./../mock/goods.json')
const router = express.Router()

app.use(router)
```
在`devServer`中添加
```js
before(app){
      app.get('/goods',(req,res)=>{
        res.json(goodsData)
      })
    }
```

## 实现图片懒加载【vue-lazyload】

1. 安装插件`npm i vue-lazyload`
2. 在main.js文件中引入
```js
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: 'static/loading-svg/loading-bars.svg',
  // attempt: 1
})
```
```html
<img v-lazy="good.productImg">
```
在图片加载之前使用`loading`中设置的图片，当图片加载完成之后，将`v-lazy`属性赋给`src`