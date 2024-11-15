import OpenAI from "openai";
import fs from "fs";
import readline from "readline";
import "dotenv/config";

function readArticle(filePath) {
  return fs.promises.readFile(filePath, "utf8"); //reading article txt
}

async function processArticle(articleText) {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
  });

  const prompt = `
      Process the following article into HTML code, that don't include <html> and <body> tags. Use appropriate HTML tags to structure the content. Place structured content into <article> tag. In places where it would be suitable to include images, add the <img> tag with the attribute src="image_placeholder.jpg" and an alt attribute containing a detailed prompt we can use to generate the image. Every image should be in <figure> tag with captions using the <figcaption> tag. Do not use CSS or JavaScript. Do not change the content of article. Do not add any additional comments, return only HTML.
      Article: 
       ${articleText}
       `;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
}

function saveToHtml(content, fileName) {
  return fs.promises.writeFile(fileName, content, "utf8");
}

async function main() {
  try {
    const articlePath = "./artykul.txt";
    const articleText = await readArticle(articlePath);
    let htmlContent = await processArticle(articleText);
    await saveToHtml(htmlContent, "artykul.html");
    console.log("> HTML was saved to artykul.html");
  } catch (error) {
    console.error("Error:", error);
  }
}

function app() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `-- Welcome to article_ai! Let's get started --\n\n> Is the article you want to process located in the root folder and named 'artykul.txt'? (Y/N) `,
    (answer) => {
      if (answer.toUpperCase() === "Y") {
        console.log(
          `\n> Great! We'll now process the article to formatted html...\n`
        );
        main();
        rl.close();
      } else if (answer.toUpperCase() === "N") {
        console.log(
          `\n> Please double-check that your article is in the root folder and named 'artykul.txt'\n`
        );
        rl.close();
        setTimeout(app, 1000);
      } else {
        console.log(
          `\n> I didn't quite catch that. Please use Y for 'Yes' or N for 'No'.\n`
        );
        rl.close();
        setTimeout(app, 1000);
      }
    }
  );
}

app();
