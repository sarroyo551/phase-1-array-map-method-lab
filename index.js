const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

/*const titleCased = () => {
  return tutorials
}*/

const titleCased = function () {
  let fixedTutorials = tutorials.map((sentence) => {
    // break sentence into an array of words
    let words = sentence.split(" ");

    // mutate each individual word to the Proper caseing
    words = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    });

    // join array of words back into a sentence with a space between each word
    return words.join(" ");
  });
  console.log(fixedTutorials);
  return fixedTutorials;
};
