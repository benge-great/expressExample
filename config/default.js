'use strict';

module.exports = {
  dbConfig: {
    username: 'postgres',
    password: 'postgres',
    database: 'tb_perk_development',
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