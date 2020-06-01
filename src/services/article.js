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

const getArticleList = async (topic) => {
  const articles = await knex
    .select()
    .from('Article')
    .whereRaw(`'${topic}' = ANY(topic)`)
  const result = {
    intro: articles.length > 0 ? `找到 ${articles.length} 篇关于 ${topic} 的文章` : `没有找到关于 ${topic} 的文章`,
    articles
  }
  return result
}

const createArticle = async (article) => {
  const { title, intro, selectedSecondaryMenu, content, } = article
  const topic = [selectedSecondaryMenu.label.toLowerCase()]
  const result = await knex('Article').insert({ title, intro, topic, content })
  console.log(result)
  return { msg: '已创建' }
}

module.exports = {
  getArticle,
  getArticleList,
  createArticle
}