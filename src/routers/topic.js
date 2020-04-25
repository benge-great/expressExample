const topicController = require('../controllers/topic')
const asyncHandler = require('express-async-handler')

module.exports = (app) => {

  app.get('/topic/:slug', asyncHandler(topicController.getTopic))

}
