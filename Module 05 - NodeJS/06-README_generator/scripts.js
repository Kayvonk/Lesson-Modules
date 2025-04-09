import { promises as fs } from "fs";
import inquirer from "inquirer";

async function init() {
  try {
    const responses = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a short description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "How is the project used?",
      },
      {
        type: "list",
        name: "license",
        message: "Which license does your project use?",
        choices: [
          "MIT",
          "Apache 2.0",
          "GPL-3.0",
          "BSD 2-Clause",
          "BSD 3-Clause",
          "Creative Commons 0 (CC0)",
          "Mozilla Public License 2.0",
          "GNU AGPLv3",
          "Eclipse Public License 2.0",
          "Zlib",
        ],
      },
    ]);

    console.log(`\nGenerating README for ${responses.projectName}...`);

    const content = `
# ${responses.projectName}

## Description
${responses.description}

## Installation
${responses.installation}

## Usage
${responses.usage}

## License
This project is licensed under the ${responses.license} license.
        `;

    await fs.writeFile("README.md", content);
    console.log("README.md file created successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
}

init();
