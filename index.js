// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are your project installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is your project usage information?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are your project contribution guidelines?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What are your project test instructions?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment.")
            } else {
                console.log("Somethine else went wrong.")
            }
        })
}

// Function call to initialize app
init();




// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });