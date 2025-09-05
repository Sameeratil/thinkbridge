## DOM-NOTES

## DOM

-The Document Object Model (DOM) is a programming interface for web documents.  
-It represents the page so that programs can change the document structure, style, and content.  
-The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.  
-The DOM is built using multiple APIs that work together.  
-The core DOM defines the entities describing any document and the objects within it.  
-This is expanded upon as needed by other APIs that add new features and capabilities to the DOM.  
-For example, the HTML DOM API adds support for representing HTML documents to the core DOM, and the SVG API adds support for representing SVG documents.

## DOM & JAVASCRIPT

-The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts.  
-The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document.  
-They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

## ACCESSING THE DOM

-You don't have to do anything special to begin using the DOM. You use the API directly in JavaScript from within what is called a script, a program run by a browser.

## DOM INTERFACES

-The DOM defines several interfaces (objects) that let JavaScript interact with HTML documents. Each interface has properties and methods.  
-The following is a brief list of common APIs in web and XML page scripting using the DOM:  
 document.querySelector()  
document.querySelectorAll()  
document.createElement()  
Element.innerHTML  
Element.setAttribute()  
Element.getAttribute()  
EventTarget.addEventListener()  
HTMLElement.style  
Node.appendChild()  
window.onload  
window.scrollTo()

## Locating DOM elements using selectors

-The Selectors API provides methods that make it quick and easy to retrieve Element nodes from the DOM by matching against a set of selectors.  
-This is much faster than past techniques, wherein it was necessary to, for example, use a loop in JavaScript code to locate the specific items you needed to find.

**The NodeSelector Interface** :  
-This specification adds two new methods to any objects implementing the Document, DocumentFragment, or Element interfaces:  
**querySelector():**  
 Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.
**querySelectorAll()**:  
Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.  
-You may find examples and details by reading the documentation for the Element.querySelector() and Element.querySelectorAll() methods.

**SELECTORS:**  
-The selector methods accept selectors to determine what element or elements should be returned.  
This includes selector lists so you can group multiple selectors in a single query.
To protect the user's privacy, some pseudo-classes are not supported or behave differently. For example :visited will return no matches and :link is treated as :any-link.  
Only elements can be selected, so pseudo-classes are not supported.
