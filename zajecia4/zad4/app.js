const express = require('express');
const bodyParser = require('body-parser');
const path = require('path') 

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();



app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.postAddStudent);
app.get('/success', studentsController.getAddingNewStudentSuccessPage);
app.get('/list', studentsController.getStudentsListPage);

app.use(errorController.getNotFoundPage);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});