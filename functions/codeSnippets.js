const lc = require("./languageCodes");

/**
 *
 * This function returns the code snippet for the given input
 * @param {string} input The input to return the code snippet for
 * @returns {string} The code snippet
 * @example
 * ```ts
 * const snippet = codeSnippets("js");
 * console.log(snippet); // Returns the code snippet for JavaScript
 * ```
 */
const codeSnippets = (input) => {
  // Get the language code
  const languageCode = lc(input);

  // Get the code snippets for the language code
  const languageSnippets = require(`./languageSnippets/${languageCode}`);

  // Return the code snippets
  const codeSnippets = languageSnippets(languageCode);
  return codeSnippets;
};

module.exports = codeSnippets;
