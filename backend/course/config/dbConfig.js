const mysql = require('mysql');

const dbConfig = {
  host: 'localhost:300', 
  user: 'couse', 
  password: 'deo',
  database: 'deo', 
};

const connection = mysql.createConnection(dbConfig);
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
