const articleController = require('../controllers/article')
const asyncHandler = require('express-async-handler')

module.exports = (app) => {
  app.get('/article/:title', asyncHandler(articleController.getArticle))
  app.get('/articles/:slug', asyncHandler(articleController.getArticleList))
}