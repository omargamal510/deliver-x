// nav

import {
  navMainUl,
  navSmUl,
  navSmUlSpan1,
  navSmUlSpan2,
  navTrigger,
} from "./dom.js";
import { appendHTMLElement } from "./utils.js";

const navLinks = [
  "Home",
  "About",
  "Pricing",
  "Pages <i class='fa fa-angle-down'></i>",
  "Cart",
];
const navButtons = ["Download app", "Register"];

document.addEventListener("DOMContentLoaded", () => {
  appendHTMLElement(navLinks, "li", navMainUl);
  appendHTMLElement(navButtons, "button", navMainUl, "navbar-button");
  appendHTMLElement(navLinks, "li", navSmUl, "nav-li-sm");
});

navTrigger.addEventListener("click", () => {
  navSmUl.classList.toggle("nav-sm-ul-trigger");
  navSmUlSpan1.classList.toggle("nav-sm-trigger-span-1");
  navSmUlSpan2.classList.toggle("nav-sm-trigger-span-2");
});
// nav
