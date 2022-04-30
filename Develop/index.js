// TODO: Include packages needed for this application
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { resolve } = require('path');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username! (Required)',
        validate: userName => {
            console.log(userName);
            if(userName){
                return true;
            }else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message:'Please enter your email address. (Required)',
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
        name: 'howToUse',
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
        message: 'Which of the following licences would you like to use?',
        choices: [
            'MIT',
            'Apache License, version 2.0',
            'Apache',
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

]);
}

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            // if thers an error, reject the promise and send thr error to the Promises catch method
            if(err) {
                reject (err);
                return;
            }

            // if it went well, resolve the promise and send the successfull data to the .then method.
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/README.md', '../README.md', err => {
            if (err) {
                return;
            }
            resolve({
                ok: true,
                message: 'readme coppied'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(qAnswers => {
        console.log(qAnswers);
        return qAnswers;
    })
    .then(data => {
        return generateMarkdown(data);
    })
    .then(fileInfo => {
        return writeToFile(fileInfo);
    })
    .then(() => {
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();

