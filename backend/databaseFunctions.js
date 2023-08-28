const database = require('./database.js');
const bcrypt = require('bcrypt');

// Save student data to the database
async function saveStudentData(data) {
  console.log(data);
  const { firstName, lastName, address, phone, email, password } = data;

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO students (firstName, lastName, address, phoneNumber, email, password)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  database.db.run(query, [firstName, lastName, address, phone, email, hashedPassword], (err) => {
    if (err) {
      console.error('Error saving student data:', err);
    } else {
      console.log('Student data saved successfully');
    }
  });
}

// Retrieve all student data from the database
function getAllStudentsData(callback) {
  const query = 'SELECT firstName,lastName,address,phoneNumber,email FROM students';
  database.db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching all students data:', err);
      callback(err, null);
      return;
    }
    callback(null, rows);
  });
}

module.exports = { saveStudentData, getAllStudentsData };

