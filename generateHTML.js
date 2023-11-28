function generateHTML(data) {
    // Insert user input into the appropriate places in the HTML template
    const htmlContent = `
      <!-- Paste the copied HTML content here and replace placeholders -->
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.name}'s Portfolio</title>
        <style>
          /* Add your CSS styling here */
          body {
            font-family: 'Arial', sans-serif;
          }
          /* Add more styles as needed */
        </style>
      </head>
      <body>
        <h1>${data.name}'s Portfolio</h1>
        <p>Location: ${data.location}</p>
        <!-- Add more HTML elements based on user input -->
      </body>
      </html>
    `;
  
    return htmlContent;
  }
  
  module.exports = generateHTML;