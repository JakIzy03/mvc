
const home = require('./views/home')
const student = require('./views/student');

function handleHome(){
    return home();
};

function handleStudent(){
    return student();
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