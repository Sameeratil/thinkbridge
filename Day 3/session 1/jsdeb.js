// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Array of numbers
let numbers = [5, 10, 15];
let totalSum = 0;

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
  totalSum = add(totalSum, numbers[i]);

  if (isEven(numbers[i])) {
    console.log(numbers[i], "is even");
  } else {
    console.log(numbers[i], "is odd");
  }
}

// Display total sum
console.log("Total Sum:", totalSum);
