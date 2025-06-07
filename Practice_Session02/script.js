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

/* --Q.5 Iterating Over a String (for...of loop)
Problem: Use a for...of loop to iterate over the string "JavaScript". */

/* --Solution 👇 */

let subject = "JavaScript";

for (let char of subject) {
  console.log(char);
}
