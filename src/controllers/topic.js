const getTopic = async (req, res) => {
  res.send({
    intro: `关于${req.params.slug}的一些东西`,
    list: [
      { title: 'nodenodenodenodenodenode', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
      { title: 'node', href: '/article/node', createdAt: moment().format('MM-DD YYYY') },
      { title: 'await', href: '/article/node-await', createdAt: moment().format('MM-DD YYYY') },
      { title: 'promise', href: '/article/node-promise', createdAt: moment().format('MM-DD YYYY') },
    ]
  })
}

module.exports = {
  getTopic
}
