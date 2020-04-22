const menuService = require('../services/menu')

const getMenu = async (req, res) => {
  const menu = await menuService.getMenu()
  res.send(menu)
}

module.exports = {
  getMenu
}
