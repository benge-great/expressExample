const articleService = require('../services/article')

const getArticle = async (req, res) => {
  const result = await articleService.getArticle(req.params.title)
  res.send(result)
}
module.exports = {
  getArticle
}
