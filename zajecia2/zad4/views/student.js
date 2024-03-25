function renderPage(data) {
    return `
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>student</title>
    </head>
    <body>
        <h1>Student profile</h1>
        <h1>${data.toString()}</h1>
    </body>
    </html>`;
}

module.exports = { renderPage };