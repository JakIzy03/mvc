const { request } = require('http');
const home = require('./views/home')
const student = require('./views/student');

function handleHome(){
    response.setHeader('Content-Type', 'text/html');
    response.end(home.renderPage());
};

function handleStudent(){
    response.setHeader('Content-Type', 'text/html');
    response.end(student.renderPage());
};

function handleFormSubmission () {
    if (request.method === 'POST') {
      response.writeHead(302, { 'Location': '/student' });
      response.end();
    } else {
      response.writeHead(405, { 'Content-Type': 'text/plain' });
      response.end('Method Not Allowed');
    }
};


module.exports = {
    handleHome,
    handleStudent,
    handleFormSubmission
  };