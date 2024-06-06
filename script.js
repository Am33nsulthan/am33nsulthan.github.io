'use strict'; // Strict mode ensures that JavaScript code is executed in a stricter operating context, which can help catch common coding mistakes and prevent problematic features from being used.

/**
 * MOBILE NAVBAR TOGGLE
 * This section of code deals with toggling the visibility of a mobile navigation bar when a toggle button is clicked.
 */

// Selecting the elements from the DOM (Document Object Model) using data attributes.
const navbar = document.querySelector("[data-navbar]"); // Selecting the mobile navigation bar element.
const navToggler = document.querySelector("[data-nav-toggler]"); // Selecting the navigation toggler element, usually a button.

// Adding an event listener to the navigation toggler button for the 'click' event.
navToggler.addEventListener("click", function () {
  // When the navigation toggler button is clicked, the following actions will be performed:

  // Toggle the 'active' class on the mobile navigation bar element.
  navbar.classList.toggle("active");

  // Toggle the 'active' class on the navigation toggler button itself.
  this.classList.toggle("active");
});
