const knex = require('../common/knex-connect')

const getArticle = async (title) => {
  let [article] = await knex.select().from('Article').where({ title })
  if (!article) {
    article = {
      title: 'not found',
      intro: '没有找到这篇文章'
    }
  }
  return { article }
}

module.exports = {
  getArticle
}