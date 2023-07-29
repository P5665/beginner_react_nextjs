// Example of JS and Imperative Programming - VERBOSE!!

// Select the div element with 'app' id
const imperativeApp = document.getElementById("imperativeApp");

// Create a new h1 element
const header = document.createElement("h1");

// Create a new text node for the H1 element
const headerContent = document.createTextNode("Develop. Preview. Ship. 🚀 - The imperative way!");

// Append the text to the H1 element
header.appendChild(headerContent);

// Place the H1 element inside the div
imperativeApp.appendChild(header);
