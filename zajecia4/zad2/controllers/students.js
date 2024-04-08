exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.postAddStudent = (req, res) => {
    res.redirect('/students-list');
};