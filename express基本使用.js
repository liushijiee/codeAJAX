//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则，request是请求报文的封装，response是响应报文的封装
app.get('/',(request,response)=>{
    response.send('hello')
});


// get 访问示例会匹配/app和其子集路径，如:http:127.0.0.1:3000/app 以及http:127.0.0.1:3000/app[/aa/bb...等等]都会匹配

// app.get('/app',(req, res, next) => {

//     //TODO SOMETHING...

// });

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log('8000端口已经启动,监听中');
})