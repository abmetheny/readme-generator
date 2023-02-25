// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "BSD 3-clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseBadge(answers.license)}
  # Table of Contents
  1. [Description](#description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contribution Guidelines](#contribution-guidelines)
  5. [Test Instructions](#test-instructions)
  6. [Licensing Information](#licensing-information)
  7. [Questions](#questions)
  
  ## Description 
  ${answers.description}
  ## Installation Instructions 
  ${answers.installation}
  ## Usage Information 
  ${answers.usage}
  ## Contribution Guidelines 
  ${answers.contributing}
  ## Test Instructions 
  ${answers.tests}
  ## Licensing Information 
  ${answers.license}
  ## Questions 
  GitHub profile: [${answers.username}](https://github.com/${answers.username})
  Contact me: <${answers.email}> 
`;
}

module.exports = generateMarkdown;
