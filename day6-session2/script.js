// Arrays of keywords
const htmlKeywords = [
  { keyword: "<header>", description: "Defines the header section of a page" },
  { keyword: "<nav>", description: "Defines navigation links" },
  { keyword: "<main>", description: "Main content area" },
  { keyword: "<article>", description: "Independent article content" },
  { keyword: "<section>", description: "Thematic section within a page" },
  { keyword: "<footer>", description: "Footer section of a page" },
];

const cssKeywords = [
  {
    keyword: "display",
    description: "Specifies the display type of an element",
  },
  { keyword: "flex-wrap", description: "Controls wrapping of flex items" },
  {
    keyword: "transition",
    description: "Defines animation for property changes",
  },
  { keyword: "transform", description: "Applies 2D/3D transformations" },
  { keyword: "box-sizing", description: "Controls box model calculation" },
];

const jsKeywords = [
  { keyword: "let/const", description: "Declares block-scoped variables" },
  { keyword: "function", description: "Defines a reusable block of code" },
  { keyword: "if/else", description: "Conditional statements" },
  { keyword: "for/while", description: "Loops for repeated execution" },
  { keyword: "object", description: "Collection of key-value pairs" },
  {
    keyword: "document.querySelector",
    description: "Selects an element from the DOM",
  },
];

// Function to render keywords
function renderKeywords(array, container, title, className) {
  // Create heading
  const heading = document.createElement("h2");
  heading.classList.add(className);

  // Add arrow
  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = "▶"; // closed arrow

  heading.appendChild(arrow);
  heading.appendChild(document.createTextNode(title));

  // Keyword list container
  const listDiv = document.createElement("div");
  listDiv.classList.add("keyword-list");
  listDiv.style.maxHeight = "0px";

  // Add keywords
  array.forEach((item) => {
    const div = document.createElement("div");
    const safeKeyword = item.keyword
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    div.innerHTML = `<strong>${safeKeyword}</strong>: ${item.description}`;
    listDiv.appendChild(div);
  });

  // Toggle expand/collapse on click
  heading.addEventListener("click", () => {
    const isOpen = listDiv.style.maxHeight !== "0px";
    if (isOpen) {
      listDiv.style.maxHeight = "0px";
      arrow.textContent = "▶";
    } else {
      listDiv.style.maxHeight = listDiv.scrollHeight + "px";
      arrow.textContent = "▼";
    }
  });

  container.appendChild(heading);
  container.appendChild(listDiv);
}

// Get container
const container = document.getElementById("all-keywords");

// Render all sections
renderKeywords(htmlKeywords, container, "HTML Keywords", "html-title");
renderKeywords(cssKeywords, container, "CSS Keywords", "css-title");
renderKeywords(jsKeywords, container, "JavaScript Keywords", "js-title");
