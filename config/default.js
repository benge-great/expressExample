'use strict';

const mysqlConnect = {
  username: 'root',
  user: 'root',
  password: '123456',
  database: 'reg',
  host: 'localhost',
}

module.exports = {
  mysqlConnect,
  dbConfig: {
    ...mysqlConnect,
    dialect: 'mysql',
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}