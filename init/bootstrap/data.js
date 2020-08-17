
module.exports = {
  dbName: "reg",
  data: {
    Menu: [
      {
        name: "Node",
        type: "primary"
      },
      {
        name: "数据库",
        type: "primary"
      },
      {
        name: "ES6",
        type: "child",
        parentId: 1,
      },
      {
        name: "异步非阻塞IO",
        type: "child",
        parentId: 1,
      },
      {
        name: "ABOUT",
        type: "secondary",
        href: "/article/about"
      },
      {
        name: "ADMIN",
        type: "secondary",
        href: "/admin"
      }
    ],
    Article: [
      {
        title: "about",
        menuId: 999,
        intro: "什么是上乘武功，我曾经坚持认为是 kubernetes，后来发现，我错了",
        content: `
## 是什么
#### 小鸡炖蘑菇
## 为什么
#### 美滴很
## 怎么样
#### 宽油炸至定型
        `
      }
    ]
  }
}
