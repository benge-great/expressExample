const articleService = require('../services/article')

const getArticle = async (req, res) => {
  const result = await articleService.getArticle(req.params.title)
  res.send(result)
}

const getArticleList = async (req, res) => {
  const result = await articleService.getArticleList(req.params.slug)
  res.send(result)
}
const createArticle = async (req, res) => {
  const result = await articleService.createArticle(req.body)
  res.send(result)
}

module.exports = {
  getArticle,
  getArticleList,
  createArticle
}
