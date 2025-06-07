/* Practice Session 02 */

/* --Q.1 Printing Numbers in Reverse (for loop)
Problem: Write a for loop to print numbers from 10 to 1 in reverse. */

/* --Solution 👇 */

for (let i = 10; i > 0; i--) {
  console.log(i);
}

/* --Q.2 Multiples of 3 (while loop)
Problem: Use a while loop to print multiples of 3 from 3 to 30 */

/* --Solution 👇 */

let i = 3;

while (i <= 30) {
  console.log(i);
  i += 3;
}

/* --Q.3 Sum of Numbers from 1 to 100
Problem: Write a program to calculate the sum of numbers from 1 to
100 using a loop */

/* --Solution 👇 */

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

/* --Q.4 Star Pattern (Nested Loops)
Problem: Create a nested loop to print a star pattern. */

/* --Solution 👇 */

for (let i = 1; i <= 10; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// Advance Pattern

let row = 6;

for (let i = 1; i <= row; i++) {
  let star = "";
  for (let j = 1; j <= row - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += "*";
  }
  console.log(star);
}

/* --Q.5 Iterating Over a String (for...of loop)
Problem: Use a for...of loop to iterate over the string "JavaScript". */

/* --Solution 👇 */

let subject = "JavaScript";

for (let char of subject) {
  console.log(char);
}

/* --Q.6 Removing Duplicate Values from an Array
Problem: Remove duplicate values from an array. */

/* --Solution 👇 */

let arr = [1, 2, 3, 3, 2, 2, 1, 1, 4, 5, 5, 4];
let uniquearr = [...new Set(arr)];

/* --Q.7 finding the Second Largest Number in an Array
Problem: Find the second largest number in an array. */

/* --Solution 👇 */

let arr2 = [34, 634, 123, 45, 234, 423, 43, 23, 213, 23, 23, 34, 634];

console.log([...new Set(arr2)].sort((a, b) => b - a)[1]);

/* --Q.8 Sorting an Array in Descending Order
Problem: Sort an array in descending order. */

/* --Solution 👇 */

let arr3 = [4, 2, 1, 3, 6, 4, 4, 3, 3, 2, 1];
console.log(arr3.sort((a, b) => b - a));

/* --Q.9 Reversing an Array Without reverse()
Problem: Reverse an array without using .reverse(). */

/* --Solution 👇 */

let arr4 = [4, 5, 6, 7, 8, 9];
let reversed = [];
for (let i = arr4.length - 1; i >= 0; i--) {
  reversed.push(arr4[i]);
}
console.log(reversed);

/* --Q.10 Finding the Most Frequent Element in an Array
Problem: Find the most frequent element in an array. */

/* --Solution 👇 */

let arr5 = [1, 4, 6, 5, 9, 3, 2, 1, 7, 7, 1, 1, 3, 2];
let frequency = {};

for (let num of arr5) {
  frequency[num] = (frequency[num] || 0) + 1;
}

let mostfrequent = Object.keys(frequency).reduce((a, b) =>
  frequency[a] > frequency[b] ? a : b
);

console.log(mostfrequent);
