const topicController = require('../controllers/topic')

module.exports = (app) => {

  app.get('/topic/:slug', topicController.getTopic)

}
