//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则，request是请求报文的封装，response是响应报文的封装
app.get('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

  // 设置响应体
  response.send("Hello Ajax");
});
app.all('/server', (request, response) => {//因为还有option请求所以把POST改成ALL
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Header', '*');//对应post中的请求头设置
  // 设置响应体
  response.send("Hello AAAjax");
});

app.all('/json-server', (request, response) => {
  // 设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应头, 设置允许自定义头信息
  response.setHeader('Access-Control-Allow-Headers', '*');
  // 响应一个数据
  const data = {
    name: 'atguigu'
  };
  // 对 对象 进行 字符串 转换
  let str = JSON.stringify(data)
  // 设置响应体 
  response.send(str);
});

app.all('/delay', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

   setTimeout(() => {
  response.send("超时");
   }, 2000);
  // 设置响应体

});


// get 访问示例会匹配/app和其子集路径，如:http:127.0.0.1:3000/app 以及http:127.0.0.1:3000/app[/aa/bb...等等]都会匹配

// app.get('/app',(req, res, next) => {

//     //TODO SOMETHING...

// });

//4.监听端口启动服务
app.listen(5000, () => {//命令：node server.js
  console.log('5000端口已经启动,监听中');
})