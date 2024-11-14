const fs = require("fs");
const readline = require("readline");
const { OPEN_AI_KEY } = require("./.env");

function readArticle(filePath) {
  return fs.promises.readFile(filePath, "utf8");  //reading article txt
}

function processArticle(articleText) {
  const prompt = "i'm processed" // Prompt for open ai

  // fetch form api and processing of data 

  const result = articleText.substring(0,10)   

  return prompt + result // return of html 
}

function saveToHtml(content) {
 return fs.promises.writeFile('article.html', content, 'utf8')
}

async function main() {
  try {
    const articlePath = "./article.txt";
    const articleText = await readArticle(articlePath);

    const htmlContent = await processArticle(articleText);

    await saveToHtml(htmlContent)


    console.log("HTML was saved to article.html");
  } catch (error) {
    console.error("Error:", error);
    rl.close();
  }
}

function app() {
 
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `-- Welcome to article_ai! Let's get started --\n\nIs the article you want to process located in the root folder and named 'article.txt'? (Y/N)\n`,

    (answer) => {
      if (answer.toUpperCase() === "Y") {
        console.log(`\nGreat! We'll now process the article to formatted html...\n`);
        main();
        rl.close();
      } else if (answer.toUpperCase() === "N") {
        console.log(
          `Please double-check that your article is in the root folder and named 'article.txt'\n\n`
        );
        rl.close();
        app()
      } else {
        console.log(`\nI didn't quite catch that. Let's try again.\nPlease use Y for 'Yes' or N for 'No'.\n\n`);
        rl.close();
        app();
      }
    }
  );
}

app();
