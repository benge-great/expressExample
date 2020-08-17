const articleService = require('../services/article')

const getArticleByTitle = async (req, res, next) => {
  const result = await articleService.getArticleByTitle(req.params.title)
  res.locals.result = result
  await next()
}

const getArticleById = async (req, res, next) => {
  const result = await articleService.getArticleById(req.params.id)
  res.locals.result = result
  await next()
}

const getArticleList = async (req, res, next) => {
  const result = await articleService.getArticleList(req.params.menuId)
  res.locals.result = result
  await next()
}
const createArticle = async (req, res, next) => {
  const result = await articleService.createArticle(req.body)
  res.locals.result = result
  await next()
}

const editArticle = async (req, res, next) => {
  const result = await articleService.editArticle(req.body)
  res.locals.result = result
  await next()
}

module.exports = {
  getArticleByTitle,
  getArticleById,
  getArticleList,
  createArticle,
  editArticle
}
