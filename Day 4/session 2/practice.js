// ==========================
// 1. VARIABLES
// ==========================
console.log("Variables in JavaScript");
let myname = "Sameer";
console.log("created a variable name ad stored sameer in it");
console.log("Name:", myname);

let x = 10;
let y = 5;
console.log("Sum:", x + y);
console.log("Difference:", x - y);
console.log("Product:", x * y);
console.log("Division:", x / y);

let number = 100;
console.log("Old value:", number);
number = 200;
console.log("New value:", number);

// ==========================
// 2. STRINGS
// ==========================
let greeting = "Hello, World!";
console.log("Length:", greeting.length);

let text = "JavaScript is fun";
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

let str = "JavaScript";
console.log("Extracted:", str.substring(4, 10)); // "Script"

let first = "Hello";
let second = "Sameer";
console.log("Concatenation (+):", first + " " + second);
console.log(`Template literal: ${first} ${second}`);

// ==========================
// 3. ARRAYS
// ==========================
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

fruits.push("Mango"); // add at end
fruits.unshift("Kiwi"); // add at start
console.log("After adding:", fruits);

fruits.pop(); // removes last
console.log("After pop:", fruits);

console.log("Looping through fruits:");
for (let fruit of fruits) {
  console.log(fruit);
}

// ==========================
// 4. LOOPS
// ==========================
// 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// even numbers 1–20
let n = 1;
while (n <= 20) {
  if (n % 2 === 0) console.log(n);
  n++;
}

// multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// sum of 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of 1 to 100:", sum);

// ==========================
// 5. CONDITIONALS
// ==========================
let num = -10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

let a = 15,
  b = 25,
  c = 10;
if (a > b && a > c) {
  console.log("Largest:", a);
} else if (b > c) {
  console.log("Largest:", b);
} else {
  console.log("Largest:", c);
}

let check = 7;
if (check % 2 === 0) {
  console.log(check, "is Even");
} else {
  console.log(check, "is Odd");
}

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
