const express = require('express');
const moment = require('moment');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors({ 'Access-Control-Allow-Origin': '*' }));

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/user/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

app.get('/hello', (req, res) => {
  res.send(`hello ${req.query.name || 'stranger'}`)
})

app.get('/menu', (req, res) => {
  const menuData = {
    primary: [{
      name: '数据库',
      id: 1,
      children: [
        { name: 'MySQL', href: '/topic/mysql' }
      ]
    }, {
      name: 'Node.JS',
      id: 2,
      children: [
        { name: '非阻塞', href: '/topic/node' }
      ]
    }],
    secondary: [
      { name: 'ABOUT', href: '/about' }
    ]
  }
  res.send(menuData)
})

app.get('/about', (req, res) => {
  res.send({
    what: '## 小鸡炖蘑菇',
    how: '## 宽油炸至定型',
    why: '## 美滴很'
  })
})

app.get('/topic/:slug', (req, res) => {
  res.send({
    intro: `关于${req.params.slug}的一些东西`,
    list: [
      { title: 'nodenodenodenodenodenode', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
    ]
  })
})

app.listen(port, () => console.log(`正在监听 ${port} 端口`))