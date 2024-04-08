let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.postAddStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    
    const newStudent = {
        id: nextId++,
        fullName,
        code,
        fieldOfStudies
    };
    
    students.push(newStudent);
    
    res.redirect('/success');
};
exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { 
        title: 'Success',
        message: 'Student has been added with success!',
        links: [
            { url: '/', text: 'Go to Home' },
            { url: '/students-list', text: 'View Students List' }
        ]
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { title: 'List', students });
};