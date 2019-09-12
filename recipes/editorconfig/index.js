import fs from "fs";
import path from "path";
import { promisify } from "util";
import prompts from "prompts";

export default function() {
  return {
    tasks: [
      new Promise((resolve, reject) => {
        prompts({
          type: "select",
          name: "value",
          message: "pick type of configuration",
          choices: [
            { title: "Simple", description: "Bare minimum configuration" },
            { title: "Verobose", description: "Contains all properties" }
          ]
        })
          .then(response => {
            if(response.value === 0) {
              promisify(fs.readFile)(path.join(__dirname, "./simple/.editorconfig"), "utf8")
                .then(data => {
                  promisify(fs.writeFile)(path.join(process.cwd(), ".editorconfig"), data, "utf8")
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            }
            else if(response.value === 1) {
              promisify(fs.readFile)(path.join(__dirname, "./verbose/.editorconfig"), "utf8")
                .then(data => {
                  promisify(fs.writeFile)(path.join(process.cwd(), ".editorconfig"), data, "utf8")
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            }
          });
      })
    ]
  }
};