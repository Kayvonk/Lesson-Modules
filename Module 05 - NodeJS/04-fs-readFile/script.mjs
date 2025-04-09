import { readFile } from "fs/promises";

const readJsonFile = async () => {
  try {
    const data = await readFile("./data.json", "utf-8");
    const users = JSON.parse(data);

    for (const user of users) {
      const { name, age, city } = user;
      console.log(`${name} is ${age} years old and lives in ${city}.`);
    }
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
};

readJsonFile();
