const knex = require('knex');
const config = require('../knexfile')

const dbEnv = process.env.DB_ENV || 'development'
//How does it know what environment to use

module.exports = knex(config[dbEnv])