const http = require('http');
const home = require('./views/home')
const student = require('./views/student');


const PORT = 3000;

function requestListener(request, response){
    const url =request.url;
    if(url === "/"){
        response.write(home.renderPage('home.js'));
        response.end();
    } else if (url === "/student") {   
            response.write(student.renderPage('student.js'));
            response.end();
    }else if (request.method === "POST") {
        response.writeHead(302, { 'Location': '/student' });
        response.end();
    } else {
        response.setHeader('Content-Type', 'text/html');
        response.write(`
            <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>404</title>
            </head>
            <body>
                <div>404 Not Found</div>
            </body>
            </html>
        `);
        response.end();
    }
}


const server = http.createServer(requestListener);

function listeningListener(){
    console.log(`Server is running on ${PORT}`);
};

server.listen(PORT, listeningListener);