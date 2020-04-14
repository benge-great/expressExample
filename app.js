const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 8080; 
app.use(cors({'Access-Control-Allow-Origin':'*'}));

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/user/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

app.get('/hello', (req, res) => {
  res.send(`hello ${req.query.name || 'stranger'}`)
})

app.get('/menu',(req,res)=>{
  const menuData = {
    primary:[{
      name: 'Getting Pregnant',
      id: 1,
      href: '/topics/getting-pregnant',
      children: [
        { name: 'All Getting Pregnantaaaa', href: '/topics/getting-pregnant' }
      ]
    }, {
      name: 'Baby Products',
      id: 2,
      href: '/topics/getting-pregnant',
      children: [
        { name: 'Baby Products', href: '/topics/getting-pregnant' }
      ]
    }],
    secondary:[
      { name: 'ABOUT', href: '/about' }
    ]
  }
  res.send(menuData)
})

app.get('/about',(req,res)=>{
  res.send({
    what:'## 小鸡炖蘑菇',
    how:'## 宽油炸至定型',
    why:'## 美滴很'
  })
})

app.listen(port,() =>console.log(`express 正在监听 ${8080} 端口`))