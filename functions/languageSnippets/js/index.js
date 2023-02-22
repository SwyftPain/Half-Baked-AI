/**
 *
 * This function returns the code snippet for the given language code
 * @param {string} languageCode The language code to return the snippet for
 * @returns {string} The code snippet
 * @example
 * ```ts
 * const snippet = snippets("js");
 * console.log(snippet); // Returns the code snippet for JavaScript
 * ```
 */
const snippets = (languageCode) => {
  const snippet = {
    create_server: `\`\`\`${languageCode}
const http = require('http');
      
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});
      
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
\`\`\`
`,
  };
  return snippet;
};

module.exports = snippets;
