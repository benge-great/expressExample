const menuService = require('../services/menu')

const getMenu = async (req, res, next) => {
  const { isAdmin } = res.locals
  const menu = await menuService.getMenu(isAdmin)
  res.locals.result = menu
  await next()
}
const createMenu = async (req, res, next) => {
  const menu = req.body
  const result = await menuService.createMenu(menu)
  res.locals.result = result
  await next()
}

module.exports = {
  getMenu,
  createMenu
}
