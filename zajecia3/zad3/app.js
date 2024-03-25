const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.use((req, res, next) => {
    const currentDate = new Date().toISOString();
    console.log(`Request ${req.method} on path ${req.url} ${currentDate}`);
    next();
  });

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HOME</title>
      </head>
      <body>
        <p>HOME</p>
      </body>
    </html>
  `);
});

app.post('/student', (req, res) => {
  const { name, lastname, studyField } = req.body;
  students.push({ name, lastname, studyField });
  res.send(`Hello, ${name} ${lastname} on ${studyField} studies!`);
});

app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ADD-STUDENT</title>
      </head>
      <body>
        <p>ADD-STUDENT</p>
        <form action="/student" method="POST">
        <div>
          <label for="name">Imię:</label>
          <input type="text" name="name">
        </div>
        <div>
          <label for="lastname">Nazwisko:</label>
          <input type="text" name="lastname">
        </div>
        <div>
          <label for="studyField">Kierunek:</label>
          <input type="text" name="studyField">
        </div>
        <button type="submit">Wyślij</button>
      </body>
    </html>
  `);
});



app.get('/users', (req, res) => {
  const userList = students.map(student => `<p>${student.name} ${student.lastname} - ${student.studyField}</p>`).join('');
  res.send(`
    <html>
      <head>
        <title>USERS</title>
      </head>
      <body>
        <ul>${userList}</ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});