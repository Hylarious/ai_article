# ai_article - README

## Overview

**Article AI** is a Node.js-based application that transforms plain text articles into structured HTML format. It uses OpenAI's API to generate semantic HTML within `<article>` tags, incorporating `<figure>` tags for suggested images with detailed alt text and captions. This app is perfect for quickly converting articles into a web-ready format.

## Features

- Converts text articles into well-structured HTML.
- Automatically adds placeholder `<img>` tags with detailed alt text.
- Wraps image content in `<figure>` tags with `<figcaption>` for captions.
- Saves the generated HTML to a file for easy use.

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/article_ai.git
   cd article_ai
   ```

2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org) installed, then run:
   ```bash
   npm install
   ```

3. **Configure OpenAI API Key**
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key to the file:
     ```
     OPENAI_API_KEY=your_openai_api_key
     ```

4. **Prepare Your Article**
   - Place the text file you want to process in the root directory.
   - Name the file `artykul.txt`.

5. **Run the Application**
   Execute the app with the following command:
   ```bash
   node app.mjs
   ```

6. **Follow the Prompts**
   - Confirm that your article is in the correct location.
   - The app will process the article and generate an HTML file named `artykul.html`.

---

## Example Output

After running the app, the `artykul.html` file will contain something like this:

```html
<article>
  <h2>Your Article Title</h2>
  <p>Your article content...</p>
  <figure>
    <img src="image_placeholder.jpg" alt="A detailed description for image generation">
    <figcaption>Description or caption for the image</figcaption>
  </figure>
  <p>More content...</p>
</article>
```

---

## Example Input and Output Files

This repository includes example files to help you get started quickly. You can find them in the root directory:

- **Input File**: `artykul.txt` – Contains a sample plain text article ready for processing.
- **Output File**: `artykul.html` – Demonstrates the generated HTML structure based on the input file.

---

## Troubleshooting

- **Missing `.env` file**: Ensure you created a `.env` file with the correct API key.
- **File not found**: Verify that `artykul.txt` exists in the root directory.
- **API errors**: Ensure your OpenAI API key is valid and has enough credits.


---

Happy converting! 🎉
