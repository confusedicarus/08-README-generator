// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
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
    message: "what kind of badge should your project have?",
    name: "badge",
    choices: [
      `![MIT](https://img.shields.io/badge/License-MIT%20-green)`,
      `![mpl-2.0](https://img.shields.io/badge/License-mpl--2.0-green)`,
      `![osl-3.0](https://img.shields.io/badge/License-osl--3.0-green)`,
      `![ms-pl](https://img.shields.io/badge/License-ms--pl-green)`,
      `![gpl-3.0](https://img.shields.io/badge/License-gpl--3.0-green)`,
    ],
  },
  {
    type: "list",
    message: "what kind of license should your project have?",
    name: "license",
    choices: [`MIT`, `mpl-2.0`, `osl-3.0`, `ms-pl`, `gpl-3.0`],
  },
  {
    type: "input",
    message: "What comand should be run to install dependencies?",
    name: "install",
  },
  {
    type: "input",
    message: "what command should be run to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "useage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("README.md has been written");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readMe = `# ${data.projectTitle} ${data.badge}

## Description
    ${data.description}
    
    
## Table of Contents
    
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    ${data.install}
## Usage
    ${data.useage}
    Examples to use the repo:
    
    [Video Link](https://drive.google.com/file/d/1GHkrgHedAD3TfTBHBWoD_Vz2ouaNhfWa/view?usp=sharing)
    
    
## Credits

[GitHub Link](https://github.com/${data.userName})
    
    
## License
    ${data.license}
    
    ---
    
    
## Badges ${data.badge}
    
## Features
    
    
## How to Contribute
    ${data.contribute}
    
## Tests
    ${data.test}
    

    `;
    writeToFile("README.md", readMe);
  });
}

// Function call to initialize app
init();
