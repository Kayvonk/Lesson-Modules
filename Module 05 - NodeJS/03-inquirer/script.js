import inquirer from "inquirer";

async function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "userName",
        message: "What is your name?",
      },
      {
        type: "list",
        name: "favoriteColor",
        message: "Choose your favorite color:",
        choices: ["Red", "Blue", "Green"],
      },
    ])
    .then((responses) => {
      console.log(`\nHello, ${responses.userName}!`);
      console.log(`Your favorite color is ${responses.favoriteColor}.`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

init();
