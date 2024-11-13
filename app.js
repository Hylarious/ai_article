const fs = require("fs");
const { OPEN_AI_KEY } = require("./.env");

function readArticle(filePath) {
  return fs.promises.readFile(filePath, "utf8");
}

async function main() {
  try {
    const articlePath = "./article.txt";
    const articleText = await readArticle(articlePath);

    console.log("ok");
  } catch (error) {
    console.error("Error:", error);
    rl.close();
  }
}

function app() {
  const readline = require("readline");

  // Create an interface to read from the command line
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt the user for input
  rl.question(
    "Are you sure that article is in folder, and named 'article.txt'",
    (answer) => {
      if (answer.toUpperCase() === "Y") {
        main();
        rl.close();
      } else if (answer.toUpperCase() === "N") {
        console.log(
          "Please make suer article is in root folder and named correctly"
        );
        rl.close();
        app()
      } else {
        console.log("Answer using Y on N");
        rl.close();
        app();
      }
    }
  );
}

app();
