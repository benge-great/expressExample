'use strict';

module.exports = {
  dbConfig: {
    username: 'postgres',
    user: 'postgres',
    password: '123456',
    database: 'reg',
    host    : 'localhost',
    dialect : 'postgres',
    logging : process.env.DB_LOGGING === 'true' ? console.log : false,
    pool    : {
        max : 5,
        min : 0,
        idle: 10000
    }
  }
}