const sqlite3 = require('sqlite3').verbose();

//connect to database
const db = new sqlite3.Database('data.db',sqlite3.OPEN_READWRITE,(err) => {
    if(err) return console.error(err.message);
});


//Create tables

//Run statements in sequence
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      address TEXT,
      phoneNumber TEXT,
      email TEXT,
      password TEXT
    )
  `);
});

module.exports = {db};