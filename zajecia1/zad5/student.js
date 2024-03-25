const FULLNAME = "Jakub Izydorczy";
const STUDENT_ID = "42881";



function getStudentFullName(){
 return FULLNAME;
};

function getStudentId() {
    return STUDENT_ID;
};

console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);

module.exports= {
    getStudentFullName,
    getStudentId,
};