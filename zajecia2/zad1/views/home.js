function renderPage(fileName) {
    return `
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${fileName}</title>
    </head>
    <body>
        <div>${fileName}</div>
    </body>
    </html>
    `;
}


module.exports = {
    renderPage
};