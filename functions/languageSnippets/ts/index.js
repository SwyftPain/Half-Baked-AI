/**
 *
 * This function returns the code snippet for the given language code
 * @param {string} languageCode The language code to return the snippet for
 * @returns {string} The code snippet
 * @example
 * ```ts
 * const snippet = snippets("ts");
 * console.log(snippet); // Returns the code snippet for TypeScript
 * ```
 */
const snippets = (languageCode) => {
  const snippet = {
    make_discord_bot: `\`\`\`${languageCode}
import Discord from 'discord.js';
    
const client = new Discord.Client();
    
client.on('ready', () => {
    console.log('Bot is ready!');
});
    
client.login('YOUR_BOT_TOKEN');
\`\`\`
`,
  };
  return snippet;
};

module.exports = snippets;
