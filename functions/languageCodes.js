/**
 * 
 * This function returns the language code for the language you want to use.
 * @param {string} input The input to return the language code for
 * @returns {string} The language code
 * @example
 * ```ts
 * const languageCode = languageCodes("I need help with this in javascript");
 * console.log(languageCode); // Returns "js"
 * ```
 */
const languageCodes = (input) => {
  let languageCode = "js";
  /* switch (true) {
    case input.toLowerCase().includes("js") ||
      input.toLowerCase().includes("javascript"):
      languageCode = "js";
      break;
    case input.toLowerCase().includes("py") ||
      input.toLowerCase().includes("python"):
      languageCode = "py";
      break;
    case input.toLowerCase().includes("ts") ||
      input.toLowerCase().includes("typescript"):
      languageCode = "ts";
      break;
    case input.toLowerCase().includes("java"):
      languageCode = "java";
      break;
    case input.toLowerCase().includes("c#") ||
      input.toLowerCase().includes("c sharp"):
      languageCode = "cs";
      break;
    case input.toLowerCase().includes("c++"):
      languageCode = "cpp";
      break;
    case input.toLowerCase().includes("c"):
      languageCode = "c";
      break;
    case input.toLowerCase().includes("go"):
      languageCode = "go";
      break;
    case input.toLowerCase().includes("php"):
      languageCode = "php";
      break;
    case input.toLowerCase().includes("ruby"):
      languageCode = "rb";
      break;
    case input.toLowerCase().includes("swift"):
      languageCode = "swift";
      break;
    case input.toLowerCase().includes("kotlin"):
      languageCode = "kt";
      break;
    case input.toLowerCase().includes("rust"):
      languageCode = "rs";
      break;
    case input.toLowerCase().includes("scala"):
      languageCode = "scala";
      break;
    case input.toLowerCase().includes("dart"):
      languageCode = "dart";
      break;
    case input.toLowerCase().includes("perl"):
      languageCode = "perl";
      break;
    case input.toLowerCase().includes("lua"):
      languageCode = "lua";
      break;
    case input.toLowerCase().includes("r"):
      languageCode = "r";
      break;
    case input.toLowerCase().includes("haskell"):
      languageCode = "hs";
      break;
    case input.toLowerCase().includes("elixir"):
      languageCode = "ex";
      break;
    case input.toLowerCase().includes("clojure"):
      languageCode = "clj";
      break;
    case input.toLowerCase().includes("erlang"):
      languageCode = "erl";
      break;
    case input.toLowerCase().includes("f#") ||
      input.toLowerCase().includes("f sharp"):
      languageCode = "fs";
      break;
    case input.toLowerCase().includes("groovy"):
      languageCode = "groovy";
      break;
    case input.toLowerCase().includes("julia"):
      languageCode = "jl";
      break;
    case input.toLowerCase().includes("ocaml"):
      languageCode = "ml";
      break;
    case input.toLowerCase().includes("pascal"):
      languageCode = "pas";
      break;
    case input.toLowerCase().includes("powershell"):
      languageCode = "ps1";
      break;
    case input.toLowerCase().includes("racket"):
      languageCode = "rkt";
      break;
    case input.toLowerCase().includes("sql"):
      languageCode = "sql";
      break;
    case input.toLowerCase().includes("vb") ||
      input.toLowerCase().includes("visual basic"):
      languageCode = "vb";
      break;
    case input.toLowerCase().includes("vim"):
      languageCode = "vim";
      break;
    case input.toLowerCase().includes("assembly"):
      languageCode = "asm";
      break;
    case input.toLowerCase().includes("coffeescript"):
      languageCode = "coffee";
      break;
    case input.toLowerCase().includes("css"):
      languageCode = "css";
      break;
    case input.toLowerCase().includes("html"):
      languageCode = "html";
      break;
    case input.toLowerCase().includes("json"):
      languageCode = "json";
      break;
    case input.toLowerCase().includes("markdown"):
      languageCode = "md";
      break;
    case input.toLowerCase().includes("yaml"):
      languageCode = "yaml";
      break;
    case input.toLowerCase().includes("xml"):
      languageCode = "xml";
      break;
    default:
      languageCode = "js";
      break;
  } */
  return languageCode;
};

module.exports = languageCodes;
