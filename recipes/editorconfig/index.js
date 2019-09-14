export default function() {
  return {
    tasks: [
      {
        type: "select",
        name: "value",
        message: "pick type of configuration",
        choices: [
          { title: "Simple", description: "Bare minimum configuration" },
          { title: "Verobose", description: "Contains all properties" }
        ],
        choicesFiles: [
          { folderName: "simple", file: ".editorconfig" },
          { folderName: "verbose", file: ".editorconfig" }
        ]
      }
    ]
  }
};