const knex = require('../common/knex-connect')
const commengService = require('./comment')

const getArticleById = async (id) => {
  let [[article], menu] = await Promise.all([
    knex.select().from('Article').where({ id }),
    knex.select().from('Menu')
  ])
  if (!article) {
    article = {
      title: 'not found',
      intro: '没有找到这篇文章'
    }
    return { article }
  }
  let secondaryMenu = {}, primaryMenu = {}
  if (article.title !== 'about') {
    secondaryMenu = menu.find(item => item.type === 'child' && item.id === article.menuId)
    primaryMenu = menu.find(item => item.type === 'primary' && item.id === secondaryMenu.parentId)
  }
  Object.assign(article, {
    secondaryMenu: { value: secondaryMenu.id, label: secondaryMenu.name },
    primaryMenu: { value: primaryMenu.id, label: primaryMenu.name },
  })
  return { article }
}

const getArticleByTitle = async (title) => {
  let [[article], comments] = await Promise.all([
    knex.select().from('Article').where({ title }),
    commengService.getCommentsByTitle(title)
  ])
  if (!article) {
    article = {
      title: 'not found',
      intro: '没有找到这篇文章'
    }
  }
  return { article, comments }
}
const getArticleList = async (menuId) => {
  const menu = await checkChildMenu(menuId)
  if (!menu) {
    return {
      intro: '没有这个菜单',
      menuName: 'ARTICLES NOT FOUND',
      articles: []
    }
  }
  const articles = await knex
    .select()
    .from('Article')
    .where({ menuId })
  // .whereRaw(`'${topic}' = ANY(topic)`)
  const result = {
    menuName: menu.name,
    intro: articles.length > 0 ? `找到 ${articles.length} 篇关于 ${menu.name} 的文章` : `没有找到关于 ${menu.name} 的文章`,
    articles
  }
  return result
}

const createArticle = async (article) => {
  const { title, intro, selectedSecondaryMenu, content, } = article
  const menuId = selectedSecondaryMenu.value
  const exist = await checkExist(title)
  if (exist) {
    return {
      status: -1,
      error: `创建失败，已经存在文章：${title}`
    }
  }
  const menu = await checkChildMenu(menuId)
  if (!menu) {
    return {
      status: -1,
      error: '菜单选择错误'
    }
  }
  const createdAt = new Date()
  const updatedAt = new Date()
  const result = await knex('Article').insert({ title, intro, menuId, content, createdAt, updatedAt })
  console.log(result)
  return {
    msg: '已创建',
    status: 1
  }
}

const editArticle = async (article) => {
  const { title, intro, content, id } = article
  const exist = await checkExist(title, id)
  if (exist) {
    return {
      status: -1,
      error: `编辑失败，已经存在文章：${title}`
    }
  }
  const updatedAt = new Date()
  const result = await knex('Article').where({ title }).update({ title, intro, content, updatedAt })
  console.log(result)
  return { msg: '已编辑', status: 1 }
}

const checkExist = async (title, excludeId) => {
  const sql = knex.select().from('Article').where({ title })
  if (excludeId) {
    sql.whereNot({ id: excludeId })
  }
  const result = await sql
  return result.length > 0
}

const checkChildMenu = async (menuId) => {
  const [menu] = await knex('Menu').select().where({ id: menuId, type: 'child' })
  return menu
}

module.exports = {
  getArticleByTitle,
  getArticleById,
  getArticleList,
  createArticle,
  editArticle
}