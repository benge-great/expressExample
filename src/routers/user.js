const userController = require('../controllers/user')
const asyncHandler = require('express-async-handler')

module.exports = (app) => {
    app.get('/checkAdmin', asyncHandler(userController.checkAdmin))
}
