const aboutController = require('../controllers/about')
const asyncHandler = require('express-async-handler')

module.exports = (app)=>{
  app.get('/about', asyncHandler(aboutController.getAbout))
}
