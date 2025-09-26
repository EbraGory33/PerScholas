function characterCounter(word) {
  let charCounter = {};
  for (let char of word) {
    if (char in charCounter) {
      charCounter[char] += 1;
    } else {
      charCounter[char] = 1;
    }
  }
  return charCounter;
}

console.log(characterCounter("Hello"));
