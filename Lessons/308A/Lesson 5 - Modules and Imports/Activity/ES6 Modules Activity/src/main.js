import { add, multiply, subtract, divide } from "./utils.js";
let num1 = 25;
let num2 = 5;
console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is: ${multiply(num1, num2)}`);
console.log(
  `The difference of ${num1} and ${num2} is: ${subtract(num1, num2)}`
);
console.log(`The quotient of ${num1} and ${num2} is: ${divide(num1, num2)}`);
