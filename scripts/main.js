// nav

import { navMainUl } from "./dom.js";
import { createHTMLElements } from "./utils.js";

const navLinks = [
  "Home",
  "About",
  "Pricing",
  "Pages <i class='fa fa-angle-down'></i>",
  "Cart",
];
const navButtons = ["Download app", "Register"];

document.addEventListener("DOMContentLoaded", () => {
  createHTMLElements(navLinks, "li", navMainUl);
  createHTMLElements(navButtons, "button", navMainUl, "navbar-button");
});

// nav
