const articleService = require('../services/article')

const getArticleByTitle = async (req, res) => {
  const result = await articleService.getArticleByTitle(req.params.title)
  res.send(result)
}

const getArticleById = async (req, res) => {
  const result = await articleService.getArticleById(req.params.id)
  res.send(result)
}

const getArticleList = async (req, res) => {
  const result = await articleService.getArticleList(req.params.menuId)
  res.send(result)
}
const createArticle = async (req, res) => {
  const result = await articleService.createArticle(req.body)
  res.send(result)
}

const editArticle = async (req, res) => {
  const result = await articleService.editArticle(req.body)
  res.send(result)
}

module.exports = {
  getArticleByTitle,
  getArticleById,
  getArticleList,
  createArticle,
  editArticle
}
