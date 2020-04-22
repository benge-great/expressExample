const knex = require('../common/knex-connect')

const getMenu = async () => {
  const allMenu = await knex('Menu').select()
  const primary = allMenu.filter(menu => menu.type === 'primary')
  const secondary = allMenu.filter(menu => menu.type === 'secondary')
  primary.forEach(parent => {
    parent.children = allMenu.filter(menu => menu.parentId === parent.id && menu.type === 'child')
  })
  return { primary, secondary }
}
module.exports = {
  getMenu
}