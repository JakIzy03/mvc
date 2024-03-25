function renderPage(fileName) {
    return `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Formularz</title>
    </head>
    <body>
      <form action="/submit" method="POST">
        <div>
          <label for="name">Imię:</label>
          <input type="text" name="name">
        </div>
        <div>
          <label for="lastname">Nazwisko:</label>
          <input type="text" name="lastname">
        </div>
        <div>
          <label for="age">Wiek:</label>
          <input type="number" name="age">
        </div>
        <div>
          <label for="gender">Płeć:</label>
          <select name="gender">
            <option value="male">Mężczyzna</option>
            <option value="female">Kobieta</option>
            <option value="other">Inna</option>
          </select>
        </div>
        <div>
          <label for="code">Numer albumu:</label>
          <input type="number" name="code">
        </div>
        <div>
          <label for="studyField">Kierunek:</label>
          <input type="text" name="studyField">
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </body>
    </html>
    `;
}


module.exports = {
    renderPage
};