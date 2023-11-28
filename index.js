// index.js
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
const fs = require('fs');

// Questions for user input
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
  // Add more questions as needed
];

// Function to write HTML to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('HTML Portfolio generated successfully!');
    }
  });
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((userInput) => {
    const htmlContent = generateHTML(userInput);
    writeToFile('portfolio.html', htmlContent);
  });
}

// Call the initialization function
init();
