const http = require('http');
const student = require('./student');

const PORT = 3000;

function requestListener(request, response){
    request;
    response;
}

const server = http.createServer(requestListener);

function listeningListener(){
    console.log(`Server is running on port ${PORT}`);
    console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
}

server.listen(PORT, listeningListener);

