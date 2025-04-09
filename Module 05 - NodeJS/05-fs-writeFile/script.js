import { promises as fs } from "fs";
import inquirer from "inquirer";

async function init() {
  try {
    const responses = await inquirer.prompt([
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
    ]);

    console.log(`\nHello, ${responses.userName}!`);
    console.log(`Your favorite color is ${responses.favoriteColor}.`);

    const content = `User Name: ${responses.userName}\nFavorite Color: ${responses.favoriteColor}\n`;

    await fs.writeFile("user-info.txt", content);
    console.log("User information saved to user-info.txt");
  } catch (error) {
    console.error("Error:", error);
  }
}

init();
