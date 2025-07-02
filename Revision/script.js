/* Revising all the things by practicing again. */

/* Q.1 Age Category Message — Ask the user for their age. If they are under 18, print "You are a minor." If they are between 18 and 60, print "You are an adult." If they are above 60, print "You are a senior citizen. */

/* let userAge = prompt("Enter your age");

if (userAge <= 0 || userAge >= 100) {
  alert("Please enter correct age!");
} else if (userAge < 18) {
  console.log("You are a minor.");
} else if (userAge <= 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
} */

/* Q.2 Even or Odd Sum — Take two numbers from the user using prompt(). If the sum of both numbers is even, print "Even Sum"; otherwise, print "Odd Sum." */

/* let num1 = Number(prompt("Enter first number."));
let num2 = Number(prompt("Enter second number."));

if ((num1 + num2) % 2 == 0) {
  console.log("It's an even number.");
} else {
  console.log("It's an odd number.");
} */

/* Q.3 Character Case Checker — Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter). */

/* let char = prompt("Enter a single letter");

if (char >= "a" && char <= "z") {
  console.log(`${char} is a lowercase letter.`);
} else if (char >= "A" && char <= "Z") {
  console.log(`${char} an Uppercase letter.`);
} else {
  console.log("It's not a letter.");
} */

/* Q.4 Largest of Three Numbers - Take three numbers as input and print the largest number among them without using Math.max(). */

/* let num1 = Number(prompt("Enter first number."));
let num2 = Number(prompt("Enter second number."));
let num3 = Number(prompt("Enter third number."));

num1 > num2
  ? num1 > num3
    ? console.log(`${num1} is the largest number.`)
    : console.log(`${num3} is the largest number.`)
  : num2 > num3
  ? console.log(`${num2} is the largest number.`)
  : console.log(`${num3} is the largest number.`);
 */

/* Q.5 Leap Year Checker — Ask the user for a year and determine if it's a leap year or not. */

/* let year = Number(prompt("Enter the year."));

if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
} */

/* Q.6 Simple Calculator - Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result. */

/* let num1 = Number(prompt("Enter first number."));
let num2 = Number(prompt("Enter second number."));
let opp = prompt("Enter an operation you want to perform");

if (opp == "+") {
  console.log(num1 + num2);
} else if (opp == "-") {
  console.log(num1 - num2);
} else if (opp == "*") {
  console.log(num1 * num2);
} else if (opp == "/") {
  console.log(num1 / num2);
} */

/* Q.7 Positive, Negative, or Zero - Take a number input and check if it is positive, negative, or zero. */

/* let userInput = Number(prompt("Enter a number."));

if (userInput > 0) {
  console.log(`${userInput} is a Positive Number.`);
} else if (userInput < 0) {
  console.log(`${userInput} is Negative Number.`);
} else if (userInput === 0) {
  console.log(`${userInput} is a Zero.`);
} else {
  console.error(`${userInput} is Not a Number.`);
} */

/* Q.8 User Greeting — Ask for the users name and time (24-hour format). Greet them accordingly:
5AM — 12PM: 'Good Morning, [Name]!"
12PM - 5PM: "Good Afternoon, [Name]!"
5PM - 9 PM: "Good Evening, [Name]!"
9PM - 5AM: "Good Night, [Name]!" */

/* const userName = prompt("Enter your name.");
const time = prompt("Enter the time according to 24-hour format.");

if (time >= "05:00" && time <= "12:00") {
  console.log(`Good Morning, ${userName} \nIt's ${time}AM`);
} else if (time >= "12:00" && time <= "17:00") {
  console.log(`Good Afternoon, ${userName} \nIt's ${time}PM`);
} else if (time >= "17:00" && time <= "21:00") {
  console.log(`Good Evening, ${userName} \nIt's ${time}PM`);
} else if (
  (time >= "21:00" && time <= "23:59") ||
  (time >= "00:00" && time <= "05:00")
) {
  time >= "21:00" && time <= "24:00"
    ? console.log(`Good Night ${userName} \nIt's ${time}PM`)
    : console.log(`Good Night ${userName} \nIt's ${time}AM`);
} else {
  console.error("It's not the correct format.");
}
 */

/* Q.9 Traffic Light System — Ask the user for a traffic light color (red, yellow, green). Print appropriate messages:
Red: "Stop!"
Yellow. "Get Ready!"
Green: "Go'" */

/* let userInput = prompt("Enter a traffic light color.👇");
userInput = userInput.trim().toLowerCase();

if (userInput === "red") {
  console.log("Stop!");
} else if (userInput === "yellow") {
  console.log("Get Ready!");
} else if (userInput === "green") {
  console.log("Go!");
} else {
  console.warn("Enter a valid color.");
} */

/* Q.10 Multiplication Table — Ask the user for a number and print its multiplication table up to 10. */

/* const userInput = Number(prompt("Enter a Number."));

for (let i = 1; i <= 10; i++) {
  console.log(`${userInput} X ${i} = ${userInput * i}`);
} */

/* Q.11 11. Grade Calculator — Ask the user for their marks (0-100). Assign grades based on the range:
90-100: A
80-89: B
70-79: c
60-69: D
Below 60: F */

/* const userMarks = Number(prompt("Enter your marks here. 👇"));

if (userMarks >= 90 && userMarks <= 100) {
  console.log("Grade - A");
} else if (userMarks >= 80 && userMarks <= 89) {
  console.log("Grade - B");
} else if (userMarks >= 70 && userMarks <= 79) {
  console.log("Grade - C");
} else if (userMarks >= 60 && userMarks <= 69) {
  console.log("Grade - D");
} else if (userMarks < 60 && userMarks >= 0) {
  console.log("Grade - F");
} else {
  console.error("Please enter your correct marks!");
} */

/* Q.12 Simple Login System — Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print "Login Successful"; otherwise, print "Incorrect username or password." */

/* const username = "Dhron Yadav";
const password = "123abc";

const userId = prompt("Enter your Name:");
const userPass = prompt("Enter Password:");

if (userId !== username || userPass !== password) {
  console.error("Incorrect username or password.");
} else {
  console.log("Login Successful");
} */

/* Q.13 Swapping Without Third Variable — Take two numbers from the user and swap their values without using a third variable. */

/* let num1 = Number(prompt("Enter first number."));
let num2 = Number(prompt("Enter second number."));

// [num1, num2] = [num2, num1];

num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;

console.log(num1, num2); */

/* Q.14 FizzBuzz (Multiple of Both) - Ask the user for a number. If it's a multiple of both 3 and 5, print "FizzBuzz"; if only 3, print "Fizz"; if only 5, print "Buzz"; otherwise, print the number itself. */

/* let userInput = Number(prompt("Enter a number."));

if (userInput % 3 === 0 && userInput % 5 === 0) {
  console.log("FizzBuzz");
} else if (userInput % 3 === 0 && userInput % 5 !== 0) {
  console.log("Fizz");
} else if (userInput % 5 === 0 && userInput % 3 !== 0) {
  console.log("Buzz");
} else {
  console.log(`${userInput}`);
} */

/* Q.15 Number Reversal - Take a three-digit number from the user and print its reverse. (Example: 123 -Y 321). */

/* let userInput = Number(prompt("Enter a three digit number."));

if (isNaN(userInput)) {
  console.error("That's not a valid input.");
} else {
  userInput = userInput.toString();
  let reverser = userInput.split("");
  let reversed = "";

  for (let i = reverser.length - 1; i >= 0; i--) {
    reversed += reverser[i];
  }

  console.log(Number(reversed));
} */

/* Q.16 Sum of Digits — Take a number from the user and print the sum of its digits. (Example: 123 1+2+3 = 6). */

/* let userInput = prompt("Enter a number here:");
let sum = 0;

for (let i = 0; i < userInput.length; i++) {
  sum += Number(userInput[i]);
}

console.log(sum); */

/* Q.17 Palindrome Checker — Ask the user for a word. Check if it reads the same forward and backward. Print "Palindrome" or "Not a Palindrome." */

/* let userInput = prompt("Enter a word here:");
let backward = "";

for (let i = userInput.length - 1; i >= 0; i--) {
  backward += userInput[i];
}

if (userInput === backward) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
} */

/* Q.18 Reverse Without String Methods — Ask the user for a number and reverse it without using .split(), .reverse(), or .join(). */

/* let userInput = prompt("Enter a number here.");
let reverser = "";

for (let i = userInput.length - 1; i >= 0; i--) {
  reverser += userInput[i];
}

console.log(Number(reverser)); */

/* Q.19 Find Second Largest — Take three numbers as input and find the second largest number (without using sort() or Math.max()). */

/* const num1 = Number(prompt("Enter the first number."));
const num2 = Number(prompt("Enter second number."));
const num3 = Number(prompt("Enter third number."));

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
  console.log(`${num1} is the second largest number.`);
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
  console.log(`${num2} is the second largest number.`);
} else {
  console.log(`${num3} is the second largest number.`);
} */

/* Q.20 Find First Non-Repeating Character - Ask the user for a word and find the first character that does not repeat. Example: hello h (since e, l, and o repeat). */

/* let userInput = prompt("Enter a word here.");
let obj = {};

for (let char of userInput) {
  if (obj[`${char}`] === undefined) {
    obj[`${char}`] = userInput[char];
    obj[`${char}`] = 1;
  } else {
    obj[`${char}`] += 1;
  }
  console.log(char);
}

for (let char in obj) {
  if (obj[`${char}`] === 1) {
    console.log(`${char} is the first non repeating character in ${userInput}`);
    break;
  }
} */

/* Q.21 Even Digit Counter - Take a number from the user and count how many even digits it has. */

/* let userInput = Number(prompt("Enter a number here:"));
let counter = 0;

for (let i = 1; i <= userInput; i++) {
  if (i % 2 === 0) {
    counter += 1;
  }
}

console.log(`${userInput} has ${counter} even numbers.`); */

/* Q.22 Nested Condition Challenge — Ask the user for their age and salary. Print a message based on conditions:
If age is below 18, print "Not eligible"
If age is 18 or more but salary is less than Rs.20,000, print "Low
Salary"
If salary is Rs.50,000 or more, print "High Salary"
Otherwise, print "Medium Salary" */

/* const userAge = Number(prompt("Enter your age here:"));
const userSalary = Number(prompt("Enter your Salary:"));

if (userAge < 18) {
  console.log("Not eligible");
} else if (userAge >= 18) {
  if (userSalary <= 20000) {
    console.log("Low Salary!");
  } else if (userSalary >= 50000) {
    console.log("High Salary!");
  } else {
    console.log("Medium Salary!");
  }
} */

/* Q.23 Toggle Case — Ask the user for a word and toggle the case of every character. Example: HeLLo -5 hEllO. */

/* let userInput = prompt("Enter a word here:");
let toggle = "";

for (let char of userInput) {
  if (char >= "a" && char <= "z") {
    toggle += char.toUpperCase();
  } else if (char >= "A" && char <= "Z") {
    toggle += char.toLowerCase();
  }
}

console.log(toggle); */

/* Q.24 Find the Missing Number in a Sequence - Take a list of consecutive numbers (except one missing) and find the missing number. Example: 1, 2, 3, 5 Missing number is 4. */

/* let list = prompt("Enter a list of numbers separated by commas.").split(",");
let counter = list[0];

for (let num of list) {
  if (counter == num) {
    counter++;
  } else {
    console.log(`${Number(counter)} is the missing number.`);
    break;
  }
} */

/* Q.25 Convert Number to Words — Take a single-digit number and print it in words (Example: 1 One, 2 Two). */

/* let digit = Number(prompt("Enter a single digit number here:"));

if (digit >= 0 && digit <= 9) {
  if (digit === 0) {
    console.log("Zero");
  } else if (digit === 1) {
    console.log("One");
  } else if (digit === 2) {
    console.log("Two");
  } else if (digit === 3) {
    console.log("Three");
  } else if (digit === 4) {
    console.log("Four");
  } else if (digit === 5) {
    console.log("Five");
  } else if (digit === 6) {
    console.log("Six");
  } else if (digit === 7) {
    console.log("Seven");
  } else if (digit === 8) {
    console.log("Eight");
  } else if (digit === 9) {
    console.log("Nine");
  } else {
    console.error("not a valid number!");
  }
} else {
  console.error("Only single digit numbers are allowed!");
} */
