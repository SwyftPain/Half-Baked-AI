/**
 *
 * This function returns an error message based on the locale
 * @param {string} locale The locale to return the error message for
 * @returns {object} The error message
 * @example
 * ```ts
 * const error = showError("en");
 * console.log(error); // Returns the error message for English
 * ```
 */
async function showError(locale) {
  const response =
    locale == "en"
      ? {
          message: "I'm sorry, I don't understand.",
          description: "Please try asking your question in a different way.",
        }
      : {
          message: "Žao mi je, ne razumem.",
          description: "Pokušajte da postavite pitanje na drugačiji način.",
        };
  return response;
}

module.exports = showError;
