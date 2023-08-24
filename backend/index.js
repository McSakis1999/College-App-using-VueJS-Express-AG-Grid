const dbFunctions = require('./databaseFunctions');

// Initialazing local server & modules
const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const PORT = 8080;
const app = express();

// Express json middleware & utility
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(
    PORT,
    () => console.log(`Api alive on localhost:${PORT}`)
);

// APIS

    // Handle form submission
    app.post('/submit', (req, res) => {
        const formData = req.body;
    
        dbFunctions.saveStudentData(formData);
        res.json({ message: 'Form submitted successfully' });
    });
  
    // Handle data retrieval for all students
    app.get('/get-students', (req, res) => {
        dbFunctions.getAllStudentsData((err, rows) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while fetching data' });
            return;
        }
        res.json(rows);
        });
    });
    