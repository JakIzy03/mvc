const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '/views/home.html'));
    })
    
app.route('/student')
    .post((req, res) => {
        const { name, lastname, studyField } = req.body;
        students.push({ name, lastname, studyField });
        res.send(`Hello, ${name} ${lastname} on ${studyField} studies!`);
      });

app.route('/add-student')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '/views/add-student.html'));
      });

app.route('/users')
    .get((req, res) => {
        const userListHTML = students.map(student => `<li>${student.name} ${student.surname} - ${student.major}</li>`).join('');
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>USERS</title>
        </head>
        <body>
            <ul>
                ${userListHTML}
            </ul>
        </body>
        </html>
        `;
        res.send(html);
      });

app.route('/students')
    .get((req, res) => {
        res.json(students);
    })
    .post((req, res) => {
        const { name, lastname, studyField } = req.body;
        const newStudent = { id: students.length + 1, name, lastname, studyField };
        students.push(newStudent);
        res.status(201).json(newStudent);
    });

app.use((req, res, next) => {
    const currentDate = new Date().toISOString();
    console.log(`Request ${req.method} on path ${req.url} ${currentDate}`);
    next();
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});