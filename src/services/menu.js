const knex = require('../common/knex-connect')
const _ = require('lodash')

const getMenu = async (isAdmin) => {
  const allMenu = await knex('Menu').select()
  if (!isAdmin) {
    _.remove(allMenu, menu => menu.name.toLowerCase() === 'admin')
  }
  const primary = allMenu.filter(menu => menu.type === 'primary')
  const secondary = allMenu.filter(menu => menu.type === 'secondary')
  primary.forEach((parent, index) => {
    parent.index = index + 1
    parent.children = allMenu.filter(menu => menu.parentId === parent.id && menu.type === 'child')
  })
  return { primary, secondary }
}

const createMenu = async (menu) => {
  const exist = await checkExist(menu.name)
  if (exist) {
    return {
      status: 0,
      msg: `已经存在：${menu.name}`
    }
  }
  Object.assign(menu, {
    createdAt: new Date(),
    updatedAt: new Date()
  })
  try {
    await knex('Menu').insert(menu)
    return {
      status: 1,
      msg: `成功添加：${menu.name}`
    }
  } catch (err) {
    console.log(err)
    return {
      status: -1,
      msg: '发生错误'
    }
  }
}
const checkExist = async (name, id) => {
  const sql = knex('Menu').select().where({ name })
  if (id) {
    sql.where({ id })
  }
  const exist = await sql;
  return exist.length > 0
}
module.exports = {
  getMenu,
  createMenu
}