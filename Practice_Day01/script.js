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


