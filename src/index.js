import "./styles/main.scss";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";

// Main section
const dom = cacheDom();
replaceContent(homePage());
bindEvents();


// Cache dom

function cacheDom() {
    return {
        content: document.querySelector("#content"),
        homeButton: document.querySelector("#home-button"),
        menuButton: document.querySelector("#menu-button"),
        aboutButton: document.querySelector("#about-button"),
    }
}


// Events

function bindEvents() {
    dom.homeButton.addEventListener("click", () => replaceContent(homePage()));
    dom.menuButton.addEventListener("click", () => replaceContent(menuPage()));
    dom.aboutButton.addEventListener("click", () => replaceContent(aboutPage()));
}


// DOM functions

function replaceContent(newChildren) {
    clearContent();
    populateContent(newChildren);
}

function clearContent() {
    while (dom.content.firstChild) {
        dom.content.removeChild(dom.content.lastChild);
    };
}

function populateContent(newChildren) {
    if (!newChildren) {
        return;
    };
    for (let child of newChildren) {
        dom.content.appendChild(child);
    };
}
