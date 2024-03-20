const http = require('http');
const student = require('./student');

const PORT = 3000;

function requestListener(request, response){
    response.setHeader("Content-type", "text/html");
    response.write("<html>");
    response.write("<head><title>About students</title></head>");
    response.write(`<body><p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>`);
    response.write("</body>");
    response.write("</html>");
    response.end();
    
}

const server = http.createServer(requestListener);

function listeningListener(){};

server.listen(PORT, listeningListener);
