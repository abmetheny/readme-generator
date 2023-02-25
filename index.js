// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your project installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your project contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your project test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Function to write README file
function writeToFile(fileName, answersArray) {
    console.log(answersArray);

    fs.writeFile(`${fileName}.md`, answersArray, (err) => {
                if (err) throw err;
                console.log("Saved!");
            });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers.Title);
            console.log(answers);
            const answersArray = generateMarkdown(answers);
            const fileName = answers.title;
            writeToFile(fileName, answersArray);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment.")
            } else {
                console.log("Something else went wrong.")
            }
        })
}

// Function call to initialize app
init();