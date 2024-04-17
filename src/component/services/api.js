import mysql from 'mysql';

const pool = mysql.createPool({
  host: 'your_host',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
});

export const query = (sql, params) =>
  new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      }

      connection.query(sql, params, (error, results, fields) => {
        connection.release();

        if (error) {
          reject(error);
        }

        resolve(results);
      });
    });
  });