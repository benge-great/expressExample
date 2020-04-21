'use strict';

module.exports = {
  dbConfig: {
    username: 'root',
    password: '123456',
    database: 'reg',
    host: 'localhost',
    dialect: 'mysql',
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}