import "./styles/index.css"
import loadHomePage from "./pages/home.js"

const contentElement = document.querySelector("#content");
loadHomePage();


function clearContent() {
    while (contentElement.firstChild) {
        contentElement.removeChild(contentElement.lastChild);
    };
}