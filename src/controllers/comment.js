const commentService = require('../services/comment')

const createComment = async (req, res, next) => {
    const result = await commentService.createComment(req.body)
    res.locals.result = result
    await next()
}

const getCommentsByTitle = async (req, res, next) => {
    const title = req.query.title
    if (!title) {
        res.locals.result = []
        await next()
        return
    }
    const result = await commentService.getCommentsByTitle(title)
    res.locals.result = result
    await next()
}

module.exports = {
    createComment
}