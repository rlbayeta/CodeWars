// Reverse Words

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords("double  spaces"); // returns  "elbuod  secaps"

function reverseWords(str) {
  let res = [],
      input = str.split(' ');
      
  for (let word of input){
    res.push(word.split('').reverse().join(''));
  }
  
  return res.join(' ');
}