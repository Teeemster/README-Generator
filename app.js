const fs = require('fs');
const inquirer = require('inquirer')

inquirer
    //Questions Are Passed In Here
    .prompt([
        {
            type: 'input',
            name: 'real_name',
            message: "What is your name?",
        },
        {
            type: 'input',
            name: 'github_name',
            message: "What is your GitHub username?",
        },
        {
            type: 'input',
            name: 'email_address',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'project_name',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'project_description',
            message: "Please write a short description of your project.",
        },
        {
            type: 'list',
            name: 'license_name',
            message: 'What kind of license should your project have?',
            choices: ['GPL v3', 'GPL v2', 'AGPL v3'],
        },
        {
            type: 'input',
            name: 'dependency_name',
            message: "What command should be run to install dependencies?",
        },
        {
            type: 'input',
            name: 'test_name',
            message: "What command should be run to run tests?",
        },
        {
            type: 'input',
            name: 'repo_info',
            message: "What does the user need to know about using the repo?",
        },
    ])
    //User Feedback Is Used To Construct README.md
    .then((answers) => {
        console.log(answers);
        console.log(answers.license_name);
        console.log(badgeIcon)

        let badgeIcon = answers.license_name;

        if (badgeIcon = 'GPL v3') {
            badgeIcon = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        } else if (badgeIcon = 'GPL v2') {
            badgeIcon = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        } else {
            badgeIcon = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        }

        fs.writeFileSync('README.md',

            //Beginning of README

            `# ${answers.project_name}

${badgeIcon}

## Description
* ${answers.project_description}

## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [License](#license)

* [Badges](#badges)

## Installation
* None

## Usage
* ${answers.repo_info}
* This repository can be opened as an HTML within Github at the website: https://${answers.github_name}.github.io/${answers.project_name}/

## Testing
* To install dependencies, use: ${dependency_name}
* To run tests, use: ${answers.test_name}

##Contributors
* ${answers.real_name}
* University of Arizonia

## Questions
* Feel free to reach me at ${answers.email_address} or my Github at https://github.com/${answers.github_name}

## License
* This application is covered under ${answers.license_name}.

## Badges

* <a href="https://github.com/badges/shields"><img src="https://img.shields.io/badge/JSS-50%25-green" alt="JavaScript 50% Badge"></a>
* <a href="https://github.com/badges/shields"><img src="https://img.shields.io/badge/HTML-25%25-green" alt="HTML 25% Badge"></a>
* <a href="https://github.com/badges/shields"><img src="https://img.shields.io/badge/CSS-25%25-green" alt="CSS 25% Badge"></a>`

            //END of README

            , (err) => {
                if (err) throw err;
                console.log("The file has been saved!");
            }
        );
    })
    .catch ((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});