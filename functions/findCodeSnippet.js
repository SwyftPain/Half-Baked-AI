const Sentiment = require("sentiment");
const compromise = require("compromise");
const { NlpManager } = require("node-nlp");
const codeSnippets = require("./codeSnippets");

/**
 *
 * This function returns the code snippet for the given input
 * @param {string} input The input to return the code snippet for
 * @returns {object} The code snippet, sentiment score, entities, noun phrases, and verbs
 * @example
 * ```ts
 * const snippet = findCodeSnippet("js");
 * console.log(snippet); // Returns the code snippet for JavaScript
 * ```
 */
async function findCodeSnippet(input) {
  // Get the sentiment score
  const sentiment = new Sentiment();
  const sentimentScore = sentiment.analyze(input).score;

  // Get the noun phrases and verbs
  const doc = compromise(input);

  // Get the NLP manager and train it
  const manager = new NlpManager({ languages: ["en", "rs"] });
  // Train the NLP manager with intents and answers (and optional programming languages)
  // Create questions for the user to ask
  manager.addDocument("en", "create a server in {language}", "create_server", {
    language: "node.js",
  });
  manager.addDocument(
    "en",
    "make a discord bot in {language}",
    "make_discord_bot",
    { language: "typescript" }
  );
  manager.addDocument(
    "rs",
    "napravi discord bot u {language}",
    "make_discord_bot",
    { language: "typescript" }
  );
  manager.addDocument(
    "en",
    "make a discord bot in {language}",
    "make_discord_bot",
    { language: "javascript" }
  );

  // Add the answers to the questions
  manager.addAnswer(
    "en",
    "create_server",
    "Here is the code to create a server in node.js..."
  );
  manager.addAnswer(
    "en",
    "make_discord_bot",
    "Here is the code to make a Discord bot in typescript..."
  );
  manager.addAnswer(
    "rs",
    "make_discord_bot",
    "Evo ga kod za Discord bot u typescriptu..."
  );

  // Train the NLP manager
  await manager.train();

  // Process the input
  const response = await manager.process("en", input);

  console.log(response);

  // Return the code snippet, sentiment score, entities, noun phrases, and verbs
  if (response.intent && codeSnippets(input)[response.intent]) {
    return {
      codeSnippet: codeSnippets(input)[response.intent],
      sentimentScore: sentimentScore,
      entities: response.entities,
      nounPhrases: doc.nouns().toSingular().out("array"),
      verbs: doc.verbs().out("array"),
      adjectives: doc.adjectives().out("array"),
      locale: response.locale,
    };
  }
  return null;
}

module.exports = findCodeSnippet;
