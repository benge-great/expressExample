module.exports = async (req, res, next) => {
    res.locals.isAdmin = false
    next()
}