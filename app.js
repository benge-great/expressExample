const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors');
const routers = require('./src/routers');
const { errorHandling, isAdmin, resHandling } = require('./src/middlewares');
const app = express();
const port = 8080;
app.use(cors({ 'Access-Control-Allow-Origin': '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(isAdmin)
routers(app)
app.use(errorHandling)

app.use(resHandling)

app.listen(port, () => console.log(`正在监听 ${port} 端口`))
