const {Pool}= require('pg')
const pool = new Pool({
    user: 'envass',
    database: 'users',
    password: '12345678',
    port: 5432,
    host: 'localhost',
  })
  module.exports = {pool};