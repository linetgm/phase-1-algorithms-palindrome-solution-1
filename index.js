function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/*
  Pseudocode:
  1. Reverse the input string
  2. Compare the reversed string with the input
  3. Return the result of comparison which will be either true or false
*/

/*
  Explanation of solution:
  The function first reverses the input string using the built-in JavaScript methods. It splits the string into an array of characters, reverses the array, and then joins the array back into a string. It then compares this reversed string with the original input. If they are the same, it returns true (indicating a palindrome), and if not, it returns false.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;