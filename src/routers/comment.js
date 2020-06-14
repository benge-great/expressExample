const commentController = require('../controllers/comment')
const asyncHandler = require('express-async-handler')

module.exports = (app) => {
    // app.get('/comments', asyncHandler(commentController.getCommentsByTitle))
    app.post('/comment', asyncHandler(commentController.createComment))
}