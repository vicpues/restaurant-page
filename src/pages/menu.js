import fruitImg from "../assets/fruits.webp";
import { createArticle, createHeader, createParagraph } from "./page-utils";

export default function generateMenuPage() {
    const content = [];

    content.push((() => {
        const article = createArticle();

        const header = document.createElement("h2");
        header.textContent = "Our culinary offering";
        article.appendChild(header);

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        const header = createHeader("Normal, non-radioactive fruits");
        article.appendChild(header);
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.alt = "An assortment of happy, dancing fruits";
        image.src = fruitImg;
        figure.appendChild(image);
        const caption = document.createElement("figcaption");
        caption.textContent = "Just good ol' fruit";
        figure.appendChild(caption);

        article.appendChild(figure);

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        

        return article;
    })())



    return content;
}