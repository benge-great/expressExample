const getAbout = async (req, res, next) => {
  res.locals.result = {
    what: '## 小鸡炖蘑菇',
    how: '## 宽油炸至定型',
    why: '## 美滴很'
  }
  await next()
}

module.exports = {
  getAbout
}
