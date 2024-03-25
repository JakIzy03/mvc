const http = require('http');
const home = require('./views/home')
const student = require('./views/student');
const fs=require("fs");

const PORT = 3000;

function requestListener(request, response){
    const {url, method} = request;
    if (url === "/"){
        response.write(home.renderPage());
        response.end();
    } else if (url === "/student" && method==="POST") {
        const body = [];
        request.on("data", function (chunk) {
          body.push(chunk);
        });
    
        request.on("end",()=> {
          const parsedBody = Buffer.concat(body).toString();
          const data=parsedBody.replaceAll("&"," ").replaceAll("=",":");
          response.setHeader("Content-Type","text/html" );
          fs.writeFileSync("profile.txt",data);
          response.write(student.renderPage(data));
          response.end();
        });
        
        return
    }else {
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