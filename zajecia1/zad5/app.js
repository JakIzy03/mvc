const http = require('http');
const student = require('./student.js');

const PORT = 3000;

function requestListener(request, response){
    response.setHeader("Content-type", "text/html");
    response.write("<html>");
    response.write("<head><h1>About students</h1></head>");
    response.write(`<body><h1>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</h1>`);
    response.write("</body>");
    response.write("</html>");
    response.end();
    
}

const server = http.createServer(requestListener);

function listeningListener(){};

server.listen(PORT, listeningListener);