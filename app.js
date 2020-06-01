const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors');
const routers = require('./src/routers');
const middlewares = require('./src/middlewares');
const app = express();
const port = 8080;
app.use(cors({ 'Access-Control-Allow-Origin': '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

routers(app)
middlewares(app)

app.listen(port, () => console.log(`正在监听 ${port} 端口`))
