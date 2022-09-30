module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  // Reverses a string.
  return Array.from(this).reverse().join("");
}

// EXERCISE: Add a blank method to the String object prototype that returns true
// if the string is empty or consists solely of whitespace (spaces, tabs, or newlines)
// String.prototype.blank = function () {
//   test = /^$/g;
//   test2 = /\s/g;
//   result = false;
//   if (!!this.match(test) || !!this.match(test2)) {
//     result = true;
//   }
//   return result;
// }

// Array.prototype.last = function () {
//   return this.slice(this.length - 1);
// }

// Returns true for a palindrome, false otherwise.
// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }
  // Semplification of the abovr using the .match string method
  //     return (this.content.match(/[a-z]/gi) || []).join("");


  // EXERCISE: Makes the phrase LOUDER.
  this.louder = function() {
    let loud = this.content.toUpperCase();
    return loud;
  };

  // EXERCISE: processor method to return content in lower case
  this.processor = function() {
    return this.letters().toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}



// Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
// // Returns translation processed for palindrome testing.
// this.processedContent = function processedContent() {
//   return this.processor(this.translation);
// }
// }
//
// TranslatedPhrase.prototype = new Phrase();
