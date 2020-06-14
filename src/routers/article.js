const articleController = require('../controllers/article')
const asyncHandler = require('express-async-handler')

module.exports = (app) => {
  app.get('/article/:id(\\d+)', asyncHandler(articleController.getArticleById))
  app.get('/article/:title', asyncHandler(articleController.getArticleByTitle))
  app.get('/articles/:menuId', asyncHandler(articleController.getArticleList))
  app.post('/article', asyncHandler(articleController.createArticle))
  app.put('/article', asyncHandler(articleController.editArticle))
}