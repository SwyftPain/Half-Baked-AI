/**
 *
 * This function generates the response to send to the user
 * @param {string} locale The locale to return the response for
 * @param {object} codeSnippet The code snippet to return
 * @param {number} sentimentScore The sentiment score of the user's input
 * @param {object} entities The entities of the user's input
 * @param {object} nounPhrases The noun phrases of the user's input
 * @param {object} verbs The verbs of the user's input
 * @returns {object} The response to send to the user
 * @example
 * ```ts
 * const response = generateResponse("en", "js");
 * console.log(response); // Returns the response for English
 * ```
 */
function generateResponse(
  locale,
  input,
  { codeSnippet, sentimentScore, entities, nounPhrases, verbs, adjectives }
) {
  // Get the positive responses
  const positiveResponses =
    locale == "en"
      ? [
          "Awesome. Let me help you with that.",
          "Great. This should help you:",
          "Excellent! Here is the answer that may help you:",
        ]
      : [
          "Odlično! Dozvolite da vam pomognem.",
          "Odlično! Ovo bi trebalo da pomogne:",
          "Odlično! Evo odgovora koji bi vam mogao pomoći:",
        ];

  // Get the negative responses
  const negativeResponses =
    locale == "en"
      ? [
          "I hope this helps. Here is the answer you're looking for:",
          "Here is the answer you're looking for:",
          "Hopefully this answer can help cheer you up:"
        ]
      : [
          "Nadam se da će vam ovo pomoći. Evo odgovora koji tražite:",
          "Evo odgovora koji tražite:",
          "Nadam se da će ovaj odgovor moći da vam podigne raspoloženje:"
        ];

  // Get the response code snippet and description based on the sentiment score and locale of the user's input
  const response =
    locale == "en"
      ? {
          message: codeSnippet,
          description:
            "This answer should help you with your problem.",
        }
      : {
          message: codeSnippet,
          description: "Ovaj odgovor bi trebalo da pomogne sa vašim problemom.",
        };

  // Check if the sentiment score is positive or negative
  if (sentimentScore < 0) {
    // If the sentiment score is negative, return a negative response
    response.message = codeSnippet;
    response.description =
      locale == "en"
        ? "I'm sorry to hear that you're having trouble. "
        : "Žao mi je što imate problema. ";
    const randomIndex = Math.floor(Math.random() * negativeResponses.length);
    response.message = `${negativeResponses[randomIndex]}${codeSnippet}`;
  } else {
    // If the sentiment score is positive, return a positive response
    const randomIndex = Math.floor(Math.random() * positiveResponses.length);
    response.message = `${positiveResponses[randomIndex]}${codeSnippet}`;
  }

  // Add the entities to the response description if they exist in the user's input such as the language and the noun phrases
  if (nounPhrases.length > 0) {
    response.description +=
      locale == "en"
        ? ` Specifically, this answer should help you with what you requested: ${nounPhrases[1]}. `
        : ` Ovaj odgovor bi trebalo da pomogne sa onim što ste tražili: ${nounPhrases[1]}. `;
  }


  // Add the language to the response description if it exists in the user's input such as the programming language
  if (entities.language) {
    response.description +=
      locale == "en"
        ? `This code snippet is written in ${entities.language[0].value}.`
        : `Ovaj kod je napisan u ${entities.language[0].value}.`;
  }

  // Add the verbs to the response description if they exist in the user's input such as the verbs "create" and "generate"
  if (verbs.length > 0) {
    response.description +=
      locale == "en"
        ? `This answer ${verbs.join(" ")} what you requested.`
        : `Ovaj odgovor ${verbs.join(" ")} ono što ste tražili.`;
  }

  // Return the response
  return response;
}

module.exports = generateResponse;
