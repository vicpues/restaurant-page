import "./styles/main.scss";
import homePage from "./pages/home.js";
import aboutPage from "./pages/about.js";
import menuPage from "./pages/menu.js";

// Cache content section
const contentElement = document.querySelector("#content");


replaceContent(homePage());


// DOM functions

function replaceContent(newChildren) {
    clearContent();
    populateContent(newChildren);
}

function clearContent() {
    while (contentElement.firstChild) {
        contentElement.removeChild(contentElement.lastChild);
    };
}

function populateContent(newChildren) {
    for (let child of newChildren) {
        contentElement.appendChild(child);
    };
}
