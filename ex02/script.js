
// Select by ID
const title = document.getElementById("title");

// Change title text
title.textContent = "Updated by JavaScript";

// Select by CSS class
const message = document.querySelector(".message");

// Modify text and styling
message.textContent = "Hello from JavaScript!";
message.style.color = "blue";
message.style.fontWeight = "bold";

// Select status element
const status = document.getElementById("status");

status.textContent = "Active";
status.classList.add("active");

// Toggle the active class
const paragraph = document.querySelector(".highlight");

paragraph.classList.toggle("active");
