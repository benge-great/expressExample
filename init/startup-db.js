const { Client } = require('pg');
const config = require('config')
const Sequelize = require('sequelize')
const dbConfig = config.get('dbConfig')
const models = require('../models')
const bootstrapDBConfig = require('./bootstrap/config.json')
const bootstrapData = require('./bootstrap/data.json')


const query = async(sql, values) => {
  const client = new Client(bootstrapDBConfig);
  await client.connect()
  const result = await client.query(sql, values)
  await client.end()
  return result.rows
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
    console.log(`table ${table} created!`)
    if (bootstrapData['data'][table]) {
      await insertData(models[table], bootstrapData['data'][table])
      console.log(`data inserted into ${table}!`)
    }
  }
};

module.exports = async () => {
  try {

    console.log('drop db...')
    await dropDatabase()

    console.log('create db...')
    await createDatabase()

    await createTables()
  } catch (err) {
    throw err
  }
}