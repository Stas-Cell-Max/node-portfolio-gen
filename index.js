const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for information

  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Provide a brief description about yourself:',
    },
    {
      type: 'input',
      name: 'project1',
      message: 'Name of Project 1:',
    },
    {
      type: 'input',
      name: 'project2',
      message: 'Name of Project 2:',
    },
    {
      type: 'input',
      name: 'project3',
      message: 'Name of Project 3:',
    },
    {
      type: 'input',
      name: 'instagram',
      message: 'Your Instagram profile URL:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Your GitHub profile URL:',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Your LinkedIn profile URL:',
    },
  ];
  

// Function to generate HTML content
function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>${data.name}'s Portfolio</title>
    <style>
      /* Add the CSS styling here */
      body {
        font-family: 'Arial', sans-serif;
      }
      /* Add more styles as needed */
    </style>
  </head>
  <body>
    <header>
      <h1>${data.name}'s Portfolio</h1>
    </header>
    <br>
    <div>
      <p>Location: ${data.location}</p>
      <br>
      <p class="about">
        <h3>About Me</h3>
        ${data.bio}
      </p>
    </div>
    <br>
    <section id="portfolio">
      <h3>My Portfolio</h3>
      <article class="card">
        <p>${data.project1}</p>
      </article>
      <article class="card">
        <p>${data.project2}</p>
      </article>
      <article class="card">
        <p>${data.project3}</p>
      </article>
    </section>
    <br>
    <section>
      <h3>Contact Me</h3> 
      <ul class="list-group">
        <li>${data.instagram}</li>
        <li>${data.github}</li>
        <li>${data.linkedin}</li>
      </ul>
    </section>
    <br>
    <footer class="footer">    
      <p>Made with love by ${data.name}</p>
    </footer>
  </body>
  </html>
  `;
}

// Function to write HTML to file system
function writeHTMLToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('HTML portfolio generated successfully!');
    }
  });
}

// Start the HTML generator
function init() {
  inquirer.prompt(questions).then((userInput) => {
    const htmlContent = generateHTML(userInput);
    writeHTMLToFile('portfolio.html', htmlContent);
  });
}

// Call the initialization function
init();
