// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
    validate: title => {
      if (title) {
        return true;
      } else {
        console.log('What is your project title?!')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What was your motivation?',
    name: 'motivation',
    validate: motivation => {
      if (motivation) {
        return true;
      } else {
        console.log('What was your motivation?!')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'reason',
    validate: reason => {
      if (reason) {
        return true;
      } else {
        console.log('Why did you build this project?!')
        return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What problem does it solve?',
    name: 'solution',
    validate: solution => {
      if (solution) {
        return true;
      } else {
        console.log('What problem does it solve?!')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What did you learn?',
    name: 'learn',
    validate: learn => {
      if (learn) {
        return true;
      } else {
        console.log('What did you learn?!')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    name: 'installation',
    validate: installation => {
    if (installation) {
        return true;
      } else {
        console.log('What are the steps required to install your project?! Provide a step-by-step description of how to get the development environment running!')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    name: 'usage',
    validate: usage => {
      if (usage) {
        return true;
      } else {
        console.log('Provide instructions and examples for use. Include screenshots as needed!')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
    name: 'collaborators'
  },
  {
    type: 'input',
    message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
    name: 'thirdParty'
  },
  {
    type: 'input',
    message: 'If you followed tutorials, include links to those here as well.',
    name: 'tutorials'
  },
  {
    type: 'list',
    message: 'Let other developers know what they can and cannot do with your project.',
    name: 'license',
    choices: ['None', 'Apache License 2.0', 'GNU GPL v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU AGPL v3.0', 'GNU GPL v2.0', 'GNU LGPL v3.0', 'Mozilla Public License 2.0', 'The Unilicense']
  },
  {
    type: 'input',
    message: 'List the features you added to your project.',
    name: 'feature'
  },
  {
    type: 'input',
    message: 'Provide the link to the video of a test.',
    name: 'video'
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, 
    (err) => err ? console.error(Error) : console.log("README.md Successfully Created!"))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => {
      console.log(response);
      writeToFile('./README.md', generateMarkdown(response));
    });
}

// Function call to initialize app
init();
