const knex = require('../common/knex-connect')

const createComment = async (comment) => {
    Object.assign(comment, {
        createdAt: new Date(),
        updatedAt: new Date()
    })
    const result = await knex('Comment').insert(comment)
    return result
}

const getCommentsByTitle = async (title) => {
    const result = await knex
        .select('Comment.*')
        .from('Article')
        .innerJoin('Comment', 'Article.id', 'Comment.articleId')
        .where({ title })
    return result
}

module.exports = {
    createComment,
    getCommentsByTitle
}