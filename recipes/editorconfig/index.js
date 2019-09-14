import fs from "fs";
import path from "path";
import { promisify } from "util";
import prompts from "prompts";

export default function() {
  return {
    tasks: [
      prompts({
        type: "select",
        name: "value",
        message: "pick type of configuration",
        choices: [
          { title: "Simple", description: "Bare minimum configuration" },
          { title: "Verobose", description: "Contains all properties" }
        ]
      })
        .then(result => {
          let files = {
            "0": "./simple/.editorconfig",
            "1": "./verbose/.editorconfig"
          };

          return { result, files };
        })
        .catch(err => console.log(err))
    ]
  }
};