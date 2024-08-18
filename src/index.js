import "./styles/main.scss";
import homePage from "./pages/home.js";
import aboutPage from "./pages/about.js";
import menuPage from "./pages/menu.js";

// Main section
const dom = cacheDom();
replaceContent(homePage());


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
    for (let child of newChildren) {
        dom.content.appendChild(child);
    };
}
