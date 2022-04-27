// TODO: Include packages needed for this application
const generatePage = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter your github username! (Required)',
        validate: userName => {
            if(userName){
                return true;
            }else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email'
        message:'Please enter your username. (Required)',
        validate: emailInfo => {
            if(emailInfo){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project? (Required)' ,
        validate: titleInfo => {
            if (titleInfo) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project. (Required)',
        validate: descriptionInfo => {
            if (descriptionInfo) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Installation instructions for this project? (Required)',
        validate: instalInfo => {
            if (instalInfo) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'howToUse'
        message: 'How can this project be used',
        validate: usageInfo => {
            if (usageInfo) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following licences would you like to use? (required)',
        choices: [
            'MIT',
            'Apache',
            'Apache 2',
            'GPL'
        ]
    },
    {
        type: 'confirm',
        name: 'confirmContributor',
        message: 'Would you like to add any contributors?',
        default: true
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide contributors names',
        when: ({confirmContributors}) => {
            if(confirmContributors){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide testing instructions. (Required)',
        validate: test => {
            if(test) {
                return true;
            } else {
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

