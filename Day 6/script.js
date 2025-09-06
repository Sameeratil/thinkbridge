// Arrays of keywords
const htmlKeywords = [
  { keyword: "<header>", description: "Defines the header section of a page" },
  { keyword: "<nav>", description: "Defines navigation links" },
  { keyword: "<main>", description: "Main content area" },
  { keyword: "<article>", description: "Independent article content" },
  { keyword: "<section>", description: "Thematic section within a page" },
  { keyword: "<footer>", description: "Footer section of a page" },
  { keyword: "<aside>", description: "Sidebar content" },
  { keyword: "<h1> - <h6>", description: "Headings from largest to smallest" },
  { keyword: "<p>", description: "Paragraph text" },
  { keyword: "<a>", description: "Defines a hyperlink" },
  { keyword: "<img>", description: "Displays an image" },
  { keyword: "<ul> / <ol>", description: "Unordered and ordered lists" },
  { keyword: "<li>", description: "List item" },
  { keyword: "<form>", description: "Form for user input" },
  { keyword: "<input>", description: "Input field" },
  { keyword: "<button>", description: "Clickable button" },
  { keyword: "<label>", description: "Label for form controls" },
  { keyword: "<table>", description: "Table container" },
  { keyword: "<tr>", description: "Table row" },
  { keyword: "<td> / <th>", description: "Table cell / table header" },
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
  {
    keyword: "position",
    description:
      "Specifies positioning method (static, relative, absolute, fixed, sticky)",
  },
  {
    keyword: "top / right / bottom / left",
    description: "Offsets for positioned elements",
  },
  { keyword: "z-index", description: "Specifies stack order of elements" },
  { keyword: "overflow", description: "Controls content overflow" },
  { keyword: "opacity", description: "Sets element transparency" },
  { keyword: "margin", description: "Outer spacing of an element" },
  { keyword: "padding", description: "Inner spacing of an element" },
  { keyword: "color", description: "Text color" },
  {
    keyword: "background-color",
    description: "Background color of an element",
  },
  { keyword: "font-size", description: "Size of text" },
  { keyword: "font-weight", description: "Boldness of text" },
  { keyword: "text-align", description: "Horizontal alignment of text" },
  { keyword: "border", description: "Border style of element" },
  { keyword: "border-radius", description: "Rounded corners" },
  { keyword: "grid", description: "CSS grid layout" },
];

const jsKeywords = [
  { keyword: "let / const / var", description: "Declares variables" },
  { keyword: "function", description: "Defines a reusable block of code" },
  { keyword: "if / else", description: "Conditional statements" },
  { keyword: "switch", description: "Multiple conditional branches" },
  {
    keyword: "for / while / do...while",
    description: "Loops for repeated execution",
  },
  { keyword: "break / continue", description: "Control loop execution" },
  { keyword: "return", description: "Return value from a function" },
  { keyword: "object", description: "Collection of key-value pairs" },
  { keyword: "array", description: "Ordered collection of values" },
  {
    keyword: "array methods (push, pop, shift, unshift, map, filter, forEach)",
    description: "Common array operations",
  },
  {
    keyword: "document.querySelector / querySelectorAll",
    description: "Select elements from the DOM",
  },
  { keyword: "addEventListener", description: "Attach event listeners" },
  {
    keyword: "setTimeout / setInterval",
    description: "Timers for delayed or repeated execution",
  },
  {
    keyword: "JSON.parse / JSON.stringify",
    description: "Convert JSON to object and vice versa",
  },
  {
    keyword: "class / extends / constructor",
    description: "Object-oriented programming",
  },
  { keyword: "try / catch / finally", description: "Error handling" },
  {
    keyword: "Promise / async / await",
    description: "Asynchronous programming",
  },
  { keyword: "this", description: "Reference to current context" },
  {
    keyword: "typeof / instanceof",
    description: "Check type of variable or object",
  },
  { keyword: "Math / Date / RegExp", description: "Built-in JS objects" },
];

// Function to render keywords
function renderKeywords(array, container, title, className) {
  const heading = document.createElement("h2");
  heading.classList.add(className);

  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = "▶";

  heading.appendChild(arrow);
  heading.appendChild(document.createTextNode(title));

  const listDiv = document.createElement("div");
  listDiv.classList.add("keyword-list");
  listDiv.style.maxHeight = "0px";

  array.forEach((item) => {
    const div = document.createElement("div");
    const safeKeyword = item.keyword
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    div.innerHTML = `<strong>${safeKeyword}</strong>: ${item.description}`;
    listDiv.appendChild(div);
  });

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

// Render all sections
const container = document.getElementById("all-keywords");
renderKeywords(htmlKeywords, container, "HTML Keywords", "html-title");
renderKeywords(cssKeywords, container, "CSS Keywords", "css-title");
renderKeywords(jsKeywords, container, "JavaScript Keywords", "js-title");

// Night mode toggle
const nightBtn = document.getElementById("toggle-night");
nightBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");
  nightBtn.textContent = document.body.classList.contains("night")
    ? "☀️ Day Mode"
    : "🌙 Night Mode";
});
