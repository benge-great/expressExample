const express = require('express'); // 引用 express
const app = express(); // 新建一个 express 服务
const port = 3000; // 这个是服务监听的端口


app.get('/', (req, res) => {
  res.send('Hello World')
});

// 这个 name 的值可以在 req.params 里面看到
app.get('/user/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

// 如果访问 /hello?name=xxx
// 可以在 req.query 里面拿到 name
app.get('/hello', (req, res) => {
  res.send(`hello ${req.query.name || 'stranger'}`)
})

// 监听
app.listen(port,() =>console.log(`express 正在监听 ${port} 端口`))