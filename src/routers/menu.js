const menController = require('../controllers/menu')
const asyncHandler = require('express-async-handler')

module.exports = (app)=>{
  app.get('/menu',asyncHandler(menController.getMenu))
}
