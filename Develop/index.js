// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter Title:",
        name: "title",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Description:",
        name: "description",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Installation Instructions:",
        name: "installation",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Usage Information:",
        name: "usage",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Contribution Information:",
        name: "contribute",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Tests Information:",
        name: "tests",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'list',
        message: "Choose a license:",
        name: "license",
        choices:[
            "apache-2.0",
            "bsl-1.0",
            "bsd-2-clause",
            "bsd-3-clause",
            "cc0-1.0",
            "cc-by-4.0",
            "wtfpl",
            "epl-1.0",
            "eupl-1.1",
            "agpl-3.0",
            "gpl-2.0",
            "gpl-3.0",
            "lgpl-3.0",
            "isc",
            "mit",
            "mpl-2.0",
            "unlicense",
            "zlib",
        ],
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Github Username:",
        name: "github",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },
    {
        type: 'input',
        message: "Enter Email:",
        name: "email",
        validate: (input) => {
            return input ? true : (console.log(message), false)
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const md = generateMarkdown(data);
    writeFile(fileName,md);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {writeToFile(`newREADME.md`,answers)})
    .then(() => console.log('done'))

}   
// Function call to initialize app
init();
