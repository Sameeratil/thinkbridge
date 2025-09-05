// 1. Select elements
const message = document.querySelector("#message");
const btn = document.querySelector("#myButton");
const toggleBtn = document.querySelector("#toggleButton");
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");

// 2. Listen to click event on button
btn.addEventListener("click", () => {
  // 3. Update text
  message.textContent = "Thankyou for clicking!";

  // 4. Add a class
  message.classList.add("highlight");
});

// Toggle class on another button
toggleBtn.addEventListener("click", () => {
  message.classList.toggle("active");
  if (message.classList.contains("active")) {
    message.textContent = "Highlight is ON!";
  } else {
    message.textContent = "Highlight is OFF!";
  }
});

// Update greeting dynamically as user types
nameInput.addEventListener("input", () => {
  greeting.textContent = `Hello, ${nameInput.value}!`;
});
