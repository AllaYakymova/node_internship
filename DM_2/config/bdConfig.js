// require('dotenv').config();
const {Client} = require('pg');

// const config = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASS,
//   port: 5432
// };
// const client = new Client(config);

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'demo2_db',
  password: 'qwerty',
  port: 5432
});


// connect to postgrsql
// client
//   .connect()
//   .then(() => console.log('connected'))
//   .catch(err => console.error('connection error', err.stack));


module.exports = {client};
