// -------- Question - 1 🎀💎🎯

/* Age Category Message – Ask the user for their age. If they are
 under 18, print “You are a minor.” If they are between 18 and 60,
 print “You are an adult.” If they are above 60, print “You are a
 senior citizen.” */

// Solution 👇

/* let user_age = prompt("What is your age?");

if (user_age < 18) {
  console.log("You are Minor.");
} else if (user_age >= 18 && user_age <= 60) {
  console.log("You are an Adult");
} else if (user_age > 60 && user_age <= 102) {
  console.log("You are a Senior Citizen");
} else {
  console.log("Not a valid Age");
}  */

// -------- Question - 2 🎀💎🎯

/* Even or Odd Sum – Take two numbers from the user using
prompt(). If the sum of both numbers is even, print “Even Sum”;
otherwise, print “Odd Sum.” */

// Solution 👇

/* let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the Second number");

const sum = num1 + num2;

if(sum % 2 == 0) {
    console.log("Even Sum");
}else{
    console.log("Odd Sum");
}  */

// -------- Question - 3 🎀💎🎯

/* Character Case Checker – Ask the user for a single character.
Check if it's uppercase, lowercase, or neither (not a letter). */

// Solution 👇

/* let char = prompt("Enter a Single Character");

if (char.length !== 1) {
  console.log("Please enter only a single character");
} else if (char >= "A" && char <= "Z") {
  console.log("Character is in Uppercase.");
} else if (char >= "a" && char <= "z") {
  console.log("Character is in Lowercase.");
} else {
  console.error("not a letter.");
} */

// -------- Question - 4 🎀💎🎯

/* Largest of Three Numbers – Take three numbers as input and
print the largest number among them without using
Math.max(). */

// Solution 👇

/* let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let num3 = Number(prompt("Enter Third Number"));

num1 > num2
  ? num1 > num3
    ? console.log("This is the largest number", num1)
    : console.log("This is the largest number", num3)
  : num2 > num3
  ? console.log("This is the largest number", num2)
  : console.log("This is the largest number", num3);  */

// -------- Question - 5 🎀💎🎯

/* Largest of Three Numbers – Take three numbers as input and
print the largest number among them without using
Math.max(). */

// Solution 👇

/* let year = Number(prompt("Enter the Year"));

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0){
  console.log(year + " is a leap year.");
}else{
  console.log(year + " is not a leap year.");
}  */

// -------- Question - 6 🎀💎🎯

/* Simple Calculator – Ask the user for two numbers and an
operator (+, -, *, /). Perform the operation and display the result. */

// Solution 👇

/* let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the Second number"));
let operate = prompt("Enter the operation you want to perform");

if (operate == "+" || operate === "Plus") {
  console.log(num1 + num2);
} else if (operate == "-" || operate === "Minus") {
  console.log(num1 - num2);
} else if (operate == "/" || operate === "Divide") {
  console.log(num1 / num2);
} else if (operate == "*" || operate === "Multiply") {
  console.log(num1 * num2);
} else if (operate == "%" || operate === "Remainder") {
  console.log(num1 % num2);
} */

// -------- Question - 7 🎀💎🎯

/* Positive, Negative, or Zero – Take a number input and check if it
is positive, negative, or zero. */

// Solution 👇

/* let user_input = Number(prompt("Enter a number"));

if (user_input > 0) {
  console.log("It's a Positive number.");
} else if (user_input < 0) {
  console.log("It's a Negative number");
} else if (user_input == 0) {
  console.log("It's only zero.");
} else {
  console.error("Not a number.");
} */

// -------- Question - 8 🎀💎🎯

/* User Greeting – Ask for the user's name and time (24-hour
format). Greet them accordingly:


 5 AM–12 PM: "Good Morning, [Name]!"


 12 PM–5 PM: "Good Afternoon, [Name]!"


 5 PM–9 PM: "Good Evening, [Name]!"


 9 PM–5 AM: "Good Night, [Name]!" */

// Solution 👇

/* let user = prompt("Enter your name");
let time = prompt("Enter current time in 24-hour format");

if (time >= "05:00" && time <= "12:00") {
  console.log("Good Morning", user);
} else if (time > "12:00" && time <= "17:00") {
  console.log("Good Afternoon", user);
} else if (time > "17:00" && time <= "21:00") {
  console.log("Good Evening", user);
} else {
  console.log("Good Night", user);
} */

// -------- Question - 9 🎀💎🎯

/* Traffic Light System – Ask the user for a traffic light color (red,
yellow, green). Print appropriate messages:


 Red: "Stop!"


 Yellow: "Get Ready!"


 Green: "Go!" */

// Solution 👇

/* const color = prompt("Enter a traffic light color here");

if (color === "red" || color === "Red") {
  console.log("Stop!");
} else if (color === "yellow" || color === "Yellow") {
  console.log("Get Ready!");
} else if (color === "green" || color === "Green") {
  console.log("Go!");
} else {
  console.error("Please enter a correct value");
} */

// -------- Question - 10 🎀💎🎯

/* Multiplication Table – Ask the user for a number and print its
multiplication table up to 10. */

// Solution 👇

/* const num = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
  console.log(num + " X " + i + " = " + num * i);
} */

// -------- Question - 11 🎀💎🎯

/* Grade Calculator – Ask the user for their marks (0-100).
Assign grades based on the range:

 90-100: A

 80-89: B

 70-79: C

 60-69: D

 Below 60: F */

// Solution 👇

/* const marks = Number(prompt("Enter your marks here"));

if (marks <= 100 && marks >= 90) {
  console.log("Grade A");
} else if (marks < 90 && marks >= 80) {
  console.log("Grade B");
} else if (marks < 80 && marks >= 70) {
  console.log("Grade C");
} else if (marks < 70 && marks >= 60) {
  console.log("Grade D");
} else if (marks < 60 && marks >= 0) {
  console.log("Grade F");
} else {
  console.error("Enter correct Marks");
} */

// -------- Question - 12 🎀💎🎯

/* Simple Login System – Set a predefined username and
password. Ask the user to enter their credentials using
prompt(). If correct, print “Login Successful”; otherwise, print
“Incorrect username or password.” */

// Solution 👇

/* const username = "Dhron Yadav";
const password = 12345678;

alert("Welcome to my website");

const userinfo = prompt("Enter your username");
const userpass = Number(prompt("Enter Password"));

if (userinfo === username && userpass === password) {
  alert("Login Successful");
  console.log("Welcome Mr.", userinfo);
} else {
  alert("Incorrect username or password");
} */

// -------- Question - 13 🎀💎🎯

/* Swapping Without Third Variable – Take two numbers from the
user and swap their values without using a third variable. */

// Solution 👇

/* let a = 6;
let b = 9;

a = a^b;
b = a^b;
a = a^b;

console.log(a,b); */

// -------- Question - 14 🎀💎🎯

/* FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
only 5, print “Buzz”; otherwise, print the number itself. */

// Solution 👇

/* const user_input = Number(prompt("Enter a number here"));

if (user_input % 3 === 0 && user_input % 5 === 0) {
  console.log("FizzBuzz");
} else if (user_input % 3 === 0) {
  console.log("Fizz");
} else if (user_input % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(user_input);
} */

// -------- Question - 15 🎀💎🎯

/* Number Reversal – Take a three-digit number from the user
and print its reverse. (Example: 123 → 321). */

// Solution 👇

/* const user_input = prompt("Enter a number here");

const reversed = user_input.split("").reverse().join("");

console.log(Number(reversed)); */

// -------- Question - 16 🎀💎🎯

/* Sum of Digits – Take a number from the user and print the sum
of its digits. (Example: 123 → 1+2+3 = 6). */

// Solution 👇

/* let num = prompt("Enter numbers here");
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum = sum + Number(num[i]);
  }
  
  console.log("The sum is " + sum); */

// -------- Question - 17 🎀💎🎯

/* Palindrome Checker – Ask the user for a word. Check if it
reads the same forward and backward. Print “Palindrome” or
“Not a Palindrome.” */

// Solution 👇

/* let word = prompt("Enter a word here");

if (word === word.split("").reverse().join("")) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome.");
} */

// -------- Question - 18 🎀💎🎯

/* Reverse Without String Methods – Ask the user for a number
and reverse it without using .split(), .reverse(), or .join(). */

// Solution 👇

/* let num = prompt("Enter numbers here");
let reverser = "";

for (let i = num.length - 1; i >= 0; i--) {
  reverser += num[i];
}

console.log(Number(reverser)); */

// -------- Question - 19 🎀💎🎯

/* Find Second Largest – Take three numbers as input and find
the second largest number (without using sort() or Math.max()). */

// Solution 👇

/* let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
  console.log(num1 + " is the Second largest number");
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
  console.log(num2 + " is the Second largest number");
} else {
  console.log(num3 + " is the Second largest number");
} */

// -------- Question - 20 🎀💎🎯

/* Find First Non-Repeating Character – Ask the user for a word
and find the first character that does not repeat. Example: hello
→ h (since e, l, and o repeat). */

// Solution 👇

/* let word = prompt("Enter the word here:");
let checker = {};

for(let letter of word){
  if(checker[letter]){
    checker[letter]++
  }else{
    checker[letter] = 1;
  }
}

for(let letter of word){
  if(checker[letter] === 1){
    alert("This is the first non-repeating letter = " + letter);
    console.log(letter);
    break;
  }else{
    console.log(checker[letter]);
  }
} */

// -------- Question - 21 🎀💎🎯

/* Even Digit Counter – Take a number from the user and count
how many even digits it has. */

// Solution 👇

/* let num = prompt("Enter the number here:").split('');
let evennum = 0;

for(let counter of num){
  if(counter % 2 == 0){
    console.log("It's a even number.");
    console.log(Number(counter));
    evennum++;
  }else{
    console.log("It's a odd number.");
  }
}

console.log(evennum); */

// -------- Question - 22 🎀💎🎯

/* Nested Condition Challenge – Ask the user for their age and
salary. Print a message based on conditions:

 If age is below 18, print “Not eligible”

 If age is 18 or more but salary is less than ₹20,000, print “Low
 Salary”

 If salary is ₹50,000 or more, print “High Salary”

 . Otherwise, print “Medium Salary” */

// Solution 👇

/* let age = prompt("Enter your age");
let salary = 0;

if (age < 18) {
  alert("Not Eligible");
} else {
  salary = prompt("Enter your Salary");
  if (age >= 18 && salary < 20000) {
    console.log("Low Salary");
  } else if (age >= 18 && salary >= 50000) {
    console.log("High Salary");
  } else {
    console.log("Medium Salary");
  }
} */

// -------- Question - 23 🎀💎🎯

/* Toggle Case – Ask the user for a word and toggle the case of
every character. Example: HeLLo → hEllO. */

// Solution 👇

/* let word = prompt("Enter the word here");
let toggled = "";

for (let char of word) {
  if (char === char.toLowerCase()) {
    toggled += char.toUpperCase();
  } else {
    toggled += char.toLowerCase();
  }
}

console.log(toggled); */

// -------- Question - 24 🎀💎🎯

/* Find the Missing Number in a Sequence – Take a list of
consecutive numbers (except one missing) and find the
missing number. Example: 1, 2, 3, 5 → Missing number is 4. */

// Solution 👇

/* let input = prompt("Enter the numbers list in Sequence");
let list = input.split(",").map(Number);

for (let i = 0; i < list.length - 1; i++) {
  if (list[i + 1] !== list[i] + 1) {
    console.log("The missing number is " + (list[i] + 1));
    break;
  } else {
    console.log(list[i]);
  }
} */

// -------- Question - 25 🎀💎🎯

/* Convert Number to Words – Take a single-digit number and
print it in words (Example: 1 → One, 2 → Two). */

// Solution 👇

/* let num = Number(prompt("Enter any digit form 0 to 9"));
let list = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

if(num >= 0 && num <=9){
  console.log(list[num])
}else{
  alert("Please enter a digit from 0 to 9");
} */

// Practice Questions Completed 😊😊