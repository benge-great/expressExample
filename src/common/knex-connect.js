const Knex = require('knex')
const config = require('config')
const knex = Knex({
  client: 'mysql',
  connection: config.get('mysqlConnect'),
  debug: false,
  useNullAsDefault: true,
  pool: { min: 2, max: 10 }
})

module.exports = knex
