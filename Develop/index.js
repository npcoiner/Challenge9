// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter Title:",
        name: "Title"
    },
    {
        type: 'input',
        message: "Enter Description:",
        name: "Description"
    },
    {
        type: 'input',
        message: "Enter Title:",
        name: "Title"
    },
    {
        type: 'input',
        message: "Enter Title:",
        name: "Title"
    },
    {
        type: 'input',
        message: "Enter Title:",
        name: "Title"
    },
    {
        type: 'input',
        message: "Enter Title:",
        name: "Title"
    },
    {
        type: 'input',
        message: "Enter Title:",
        name: "Title"
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
