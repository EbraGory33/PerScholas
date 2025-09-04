// -------------------------------
// 1. Greet User
// -------------------------------
// Write a function greetUser(name) that returns "Hello, <name>!"

//     Example:
//     greetUser("Alice"); -> "Hello, Alice!"

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice");

// -------------------------------
// 2. Add Two Numbers
// -------------------------------
// Write a function addNumbers(a, b) that returns the sum of two numbers.

//     Example:
//     addNumbers(3, 5); -> 8

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(1, 2));

// -------------------------------
// 3. Check Even or Odd
// -------------------------------
// Write a function isEven(num) that returns true if the number is even, false if odd.

//     Example:
//     isEven(4); -> true
//     isEven(7); -> false

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2));

// -------------------------------
// 4. Find the Larger Number
// -------------------------------
// Write a function maxOfTwo(a, b) that returns the larger of the two numbers.

//     Example:
//     maxOfTwo(10, 20); -> 20

function maxOfTwo(a, b) {
  return a > b ? a : b;
}
console.log(maxOfTwo(1, 2));

// -------------------------------
// 5. Repeat a Word
// -------------------------------
// Write a function repeatWord(word, times) that returns the word repeated X number of times.

//     Example:
//     repeatWord("hi", 3); -> "hihihi"

function repeatWord(word, times) {
  let words = "";
  for (let i = 0; i < times; i++) {
    words += word + " ";
  }
  return words;
}
console.log(repeatWord("Hi", 3));

// -------------------------------
// 6. Convert Celsius to Fahrenheit
// -------------------------------
// Write a function toFahrenheit(celsius) that converts Celsius to Fahrenheit.

//     Formula: F = C * 9/5 + 32

//     Example:
//     toFahrenheit(0); -> 32
//     toFahrenheit(100); -> 212

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(toFahrenheit(0));

// -------------------------------
// 7. Reverse a String
// -------------------------------
// Write a function reverseString(str) that returns the reversed version of the input string.
//     Example:
//     reverseString("hello"); -> "olleh"

function reverseString(str) {
  let reverse_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse_str += str[i];
  }
  return reverse_str;
}
console.log(reverseString("Hello"));

// -------------------------------
// 8. Count Vowels
// -------------------------------
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the string.

//     Example:
//     countVowels("javascript"); -> 3

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("jAvascrIpt"));

// -------------------------------
// 9. Filter Even Numbers from Array
// -------------------------------
// Write a function filterEvenNumbers(arr) that takes an array of numbers
// and returns a new array containing only the even numbers.

//     Example:
//     filterEvenNumbers([1, 2, 3, 4, 5, 6]); -> [2, 4, 6]

function filterEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
