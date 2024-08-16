import "./styles/index.css"
import generateHomePage from "./pages/home.js"

// Cache content section
const contentElement = document.querySelector("#content");


replaceContent(generateHomePage());


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
