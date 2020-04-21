var mysql = require('mysql');
const config = require('config')
const Sequelize = require('sequelize')
const dbConfig = config.get('dbConfig')
const models = require('../models')
const bootstrapDBConfig = require('./bootstrap/config.json')
const bootstrapData = require('./bootstrap/data.json')


const query = (sql, values) => {
  const pool = mysql.createPool(bootstrapDBConfig)
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
        return
      }
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err)
          return
        }
        resolve(rows)
        connection.release()
      })
    })
  })
}

const dropDatabase = async () => {
  const sql = `DROP DATABASE if exists ${bootstrapData.dbName}`
  await query(sql)
}

const createDatabase = async () => {
  const sql = `create DATABASE ${bootstrapData.dbName}`
  await query(sql)
}

const insertData = async (model, data) => {
  if (!(data && data.length > 0)) {
    return;
  }
  await model.bulkCreate(data);
};
const createTables = async () => {
  const sequelize = new Sequelize(dbConfig);
  for (const table of Object.keys(models)) {
    const QueryInterface = sequelize.getQueryInterface();
    await QueryInterface.createTable(table, models[table].tableAttributes)
    if (bootstrapData['data'][table]) {
      await insertData(models[table], bootstrapData['data'][table])
    }
  }
};

module.exports = async () => {
  await dropDatabase()
  await createDatabase()
  await createTables()
}