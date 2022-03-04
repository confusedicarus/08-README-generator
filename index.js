// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub User Name?",
      name: "userName",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "what is your project's name?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "list",
      message: "what kind of license should your project have?",
      name: "license",
      choices: [
        `![MIT](https://img.shields.io/badge/License-MIT%20-green)`,
        `![mpl-2.0](https://img.shields.io/badge/License-mpl--2.0-green)`,
        `![osl-3.0](https://img.shields.io/badge/License-osl--3.0-green)`,
        `![ms-pl](https://img.shields.io/badge/License-ms--pl-green)`,
        `![gpl-3.0](https://img.shields.io/badge/License-gpl--3.0-green)`,
      ],
    },
  ])
  .then((data) => {
    const readMe = `# ${data.projectTitle} ${data.license}

## Description
    ${data.description}
    
    
## Table of Contents
    
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
## Installation
    
    
## Usage
    
## Credits
    @${data.userName}
    ${data.email}
    ## License

    `;
    fs.writeFile("README.md", readMe, (err) => {
      err ? console.error(err) : console.log("README.md has been written");
    });
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
