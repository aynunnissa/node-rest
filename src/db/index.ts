const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err: Error) => {
  if (err) {
    console.error('MySQL connection error:', err);
    // res.writeHead(500, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({ error: 'Internal Server Error' }));
    return;
  }
});

module.exports = {
  db,
};
