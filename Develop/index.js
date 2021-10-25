// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            name: "project_title",
            type: "input",
            message: "What's the name of your project?",
        },
        {
            name: "project_descriptin",
            type: "input",
            message: "Describe your project?",
        },
        {
            name: "installation_instructions",
            type: "input",
            message: "What are the instructions for you installation?",
        },
        {
            name: "usage_information",
            type: "input",
            message: "What is your usage information?",
        },
        {
            name: "contribution_guidelines",
            type: "input",
            message: "What are your contribution guidelines?",
        },
        {
            name: "test_instructions",
            type: "input",
            message: "Describe your test instructions",
        },
        {
            name: "project_liscense",
            type: "list",
            message: "Choose your project liscense:",
            choices: ["MIT", "EULA", "LGPL"],
        },
        {
            name: "git_username",
            type: "input",
            message: "What is your github username?"
        },
        {
            name: "user_email",
            type: "input",
            message: "Please enter your email"
        },


    ])
    .then((answer) => {
      const mkdnPageContent = generateMKDN (answer);
        // const project_title = answer.project_title


      fs.writeFile('README.md', mkdnPageContent, (err) => 
     err ? console.log(err) : console.log('Successfully created MKDN file!') 
       );

    });






  // // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(README.md, data) {}


const generateMKDN= ({ project_title, project_description, installation_instructions, usage_information, contribution_guidelines, test_instructions, project_liscense, git_username, user_email}) =>
  `
  
# The title of the README is  ${project_title}
# Project Description: ${project_description}
# Installation Instructions: ${installation_instructions}
# Usage Information: ${usage_information}
# Contribution Guidelines: ${contribution_guidelines}
# Test Instructions: ${test_instructions}
# Project Liscense ${project_liscense}
# Git Username ${git_username}
# User Email ${user_email}

`




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
