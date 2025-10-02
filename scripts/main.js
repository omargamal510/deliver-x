// nav
import {
  heroStatsParent,
  navMainUl,
  navSmUl,
  navSmUlSpan1,
  navSmUlSpan2,
  navTrigger,
} from "./dom.js";
import { appendSmallHTMLElement } from "./utils.js";

const navLinks = [
  "Home",
  "About",
  "Pricing",
  "Pages <i class='fa fa-angle-down'></i>",
  "Cart",
];
const navButtons = ["Download app", "Register"];

document.addEventListener("DOMContentLoaded", () => {
  appendSmallHTMLElement(navLinks, "li", navMainUl);
  appendSmallHTMLElement(navButtons, "button", navMainUl, "navbar-button");
  appendSmallHTMLElement(navLinks, "li", navSmUl, "nav-li-sm");
});

navTrigger.addEventListener("click", () => {
  navSmUl.classList.toggle("nav-sm-ul-trigger");
  navSmUlSpan1.classList.toggle("nav-sm-trigger-span-1");
  navSmUlSpan2.classList.toggle("nav-sm-trigger-span-2");
});
// nav

/* ================================================= */

// Hero Stats

const heroStatsData = [
  {
    num: "10M",
    span: "+",
    title: "Happy customers",
  },

  {
    num: "500K",
    span: "+",
    title: "Restaurants available",
  },

  {
    num: "30M",
    span: "+",
    title: "Successful deliveries",
  },

  {
    num: "99%",
    span: "",
    title: "Customer satisfaction",
  },
];

function createHeroStatElement(stat) {
  const div = document.createElement("div");
  div.classList.add("hero-stat");

  div.innerHTML = `
    <h3>${stat.num}<span>${stat.span}</span></h3>
    <p>${stat.title}</p>
  `;

  return div;
}

// function لعمل append لكل الـ array
function appendHeroStats(data, containerId) {
  const container = document.getElementById(containerId);

  data.forEach((stat) => {
    const element = createHeroStatElement(stat);
    container.appendChild(element);
  });
}

// الاستخدام

document.addEventListener("DOMContentLoaded", () => {
  appendHeroStats(heroStatsData, "hero-stats-container");
});

// Hero Stats
