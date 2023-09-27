const quotes = [
  {
    quote: "Captains go down with their ship.",
    author: "Teemo",
  },
  {
    quote: "Your will, my hands.",
    author: "Lee Sin",
  },
  {
    quote: "The dawn has arrived.",
    author: "Leona",
  },
  {
    quote: "There's no way out of this.",
    author: "Zilean",
  },
  {
    quote: "I have colors the wind cannot see.",
    author: "Neeko",
  },
  {
    quote: "They will regret opposing me.",
    author: "Darius",
  },
  {
    quote: "All hands on deck.",
    author: "Akali",
  },
  {
    quote: "Nature is not always gentle.",
    author: "Zyra",
  },
  {
    quote: "The heavens diminish without my attention.",
    author: "Aurelion Sol",
  },
  {
    quote: "None can defy my will.",
    author: "Mordekaiser",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
