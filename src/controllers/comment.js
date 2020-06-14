const commentService = require('../services/comment')

const createComment = async (req, res) => {
    const result = await commentService.createComment(req.body)
    res.send(result)
}

const getCommentsByTitle = async (req, res) => {
    const title = req.query.title
    if (!title) {
        res.send([])
        return
    }
    const result = await commentService.getCommentsByTitle(title)
    res.send(result)
}

module.exports = {
    createComment,
    // getCommentsByTitle
}