// import user from './User';
let user = require('./User')
console.log(`userName:${user.userName}`)
// 1.引入模块
let http = require('http')
let url = require('url')
let util = require('util')
// 2.创建服务器
let server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain;charset=utf-8")
  // 
  util.inspect(url.parse(req.url))
  res.end('Hello Node.js')
})
// 3.监听端口
server.listen(3000, '127.0.0.1', function () {
  console.log('running on port 3000')
})
