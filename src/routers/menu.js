const menController = require('../controllers/menu')

module.exports = (app)=>{
  app.get('/menu',menController.getMenu)
}
