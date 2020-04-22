const aboutController = require('../controllers/about')

module.exports = (app)=>{
  app.get('/about', aboutController.getAbout)
}
