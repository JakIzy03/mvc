const http = require('http');
const home = require('./views/home')
const student = require('./views/student');


const PORT = 3000;

function requestListener(request, response){
    const url =request.url;
    if(url === "/"){
        response.write(home.renderPage('home.js'));
        response.end();
    }
    if(url === "/student"){
        response.write(student.renderPage('student.js'));
        response.end();
    }
}

const server = http.createServer(requestListener);

function listeningListener(){
    console.log(`Server is running on ${PORT}`);
};

server.listen(PORT, listeningListener);