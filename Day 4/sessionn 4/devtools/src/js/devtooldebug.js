function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i; // breakpoint here
  }
  return result;
}
//this is after removing bug
function sumOfSquares(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    //here was the bug
    total += i * i;
  }
  return total;
}

const btn = document.getElementById("calcBtn");
btn.addEventListener("click", () => {
  const input = Number(document.getElementById("numInput").value);

  const fact = factorial(input);
  const sqSum = sumOfSquares(input);

  console.log("Factorial:", fact);
  console.log("Sum of squares:", sqSum);

  document.getElementById(
    "output"
  ).textContent = `Factorial: ${fact}, Sum of squares: ${sqSum}`;
});
