// nav

import { navMainUl } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = ["Home", "About", "Pricing", "Pages", "Cart"];
  const navButtons = ["Download app", "Register"];
  navLinks.forEach((linkText, index) => {
    const li = document.createElement("li");
    li.innerHTML = linkText.includes("Pages")
      ? `${linkText} <i class="fa fa-angle-down"></i>`
      : linkText;
    navMainUl.appendChild(li);
  });
});

// nav
