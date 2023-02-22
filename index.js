const express = require("express");
const showError = require("./functions/errors");
const findCodeSnippet = require("./functions/findCodeSnippet");
const generateResponse = require("./functions/generateResponse");

const app = express();

// Define a route for handling incoming chatbot API requests
app.get("/api/chatbot", async (req, res) => {
  const input = req.query.input;
  const codeSnippetResult = await findCodeSnippet(input);

  if (codeSnippetResult === null) {
    res.send(await showError("en"));
    return;
  }

  const response = generateResponse(codeSnippetResult.locale, input, codeSnippetResult);
  console.log(response);
  res.send(response);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
