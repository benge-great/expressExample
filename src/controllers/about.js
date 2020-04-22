const getAbout = async (req, res) => {
  res.send({
    what: '## 小鸡炖蘑菇',
    how: '## 宽油炸至定型',
    why: '## 美滴很'
  })
}

module.exports ={
  getAbout
}
