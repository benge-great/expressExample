const Knex = require('knex')
const config = require('config')
const knex = Knex({
  client: 'pg',
  connection: config.get('dbConfig'),
  debug: false,
  useNullAsDefault: true,
  pool: { min: 2, max: 10 }
})

module.exports = knex
