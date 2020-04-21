var mysql = require('mysql');
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
  for (const dbName of Object.keys(bootstrapData)) {
    const sql = `DROP DATABASE if exists ${dbName}`
    await query(sql)
  }
}

const createDatabase = async () => {
  for (const dbName of Object.keys(bootstrapData)) {
    const sql = `create DATABASE ${dbName}`
    await query(sql)
  }
}

module.exports = async () => {
  await dropDatabase()
  await createDatabase()
}