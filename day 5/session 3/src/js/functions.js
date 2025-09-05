// ===============================
// Session 3 - Functions & Scope
// src/js/functions.js
// ===============================

// ---------- 1. Function Declaration ----------
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Sameer"));

// ---------- 2. Function Expression ----------
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3));

// ---------- 3. Arrow Function ----------
const multiply = (x, y) => x * y;

console.log(multiply(4, 6));

// ---------- 4. Block Scope Example ----------
function scopeExample() {
  var globalVar = "I am function scoped";
  let blockVar = "I am block scoped";
 
  if (true) {
    var globalVar = "Changed inside block";
    let blockVar = "Changed inside block";
    console.log("Inside block - globalVar:", globalVar);
    console.log("Inside block - blockVar:", blockVar);
  }

  console.log("Outside block - globalVar:", globalVar);
  console.log("Outside block - blockVar:", blockVar);
}

scopeExample();

// ---------- 5. Nested Functions ----------
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction(5);
}

console.log(outerFunction(10));

// ---------- 6. Default Parameters ----------
function sayHello(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(sayHello());
console.log(sayHello("Sameer"));
