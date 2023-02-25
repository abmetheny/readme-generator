// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, answersArray) {
    console.log(answersArray);

    fs.writeFile(`${fileName}.md`, answersArray, (err) => {
                if (err) throw err;
                console.log("Saved!");
            });
}



// function writeToFile(answers) {
//     console.log(answers)
//     const answersArray = JSON.stringify(answers);
//     console.log(answersArray);
//     fs.writeFile('GeneratedREADME.md', answersArray, (err) => {
//         if (err) throw err;
//         console.log("Saved!");
//     });
// }

// TODO: Create a function to initialize app
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
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
//     );
//   });