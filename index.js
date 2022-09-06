const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
// const generateProfile = require("./generateProfile");
const fs = require("fs");
const team = [];

const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "profiles.html");

const output = [];
const questions = [
  {
    type: "input",
    message: "What is your full name?",
    name: "name",
  },
  {
    type: "list",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office",
    when: (answers) => answers.role === "Manager",
  },
  {
    type: "input",
    message: "What is your GitHub link?",
    name: "GitHub",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    message: "What school did you graduate from?",
    name: "school",
    when: (answers) => answers.role === "Intern",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee to the team?",
  },
];

function promptUser() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
          team.push(
            new Manager(answers.name, answers.id, answers.email, answers.office)
          );
          break;

        case "Engineer":
          team.push(
            new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.GitHub
            )
          );
          break;

        case "Intern":
          team.push(
            new Intern(answers.name, answers.id, answers.email, answers.school)
          );
          break;

        default:
          console.log("No such employee type.");
      }

      if (answers.addEmployee) {
        promptUser();
      } else {
        fs.writeFile(outputPath, render(team), (err) => {
          if (err) {
            throw err;
          }
          console.log("Success!");
        });
      }
    })
    .catch((err) => {
      if (err) {
        console.log("Error: ", err);
      }
    });
}

promptUser();
