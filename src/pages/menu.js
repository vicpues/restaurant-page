import fruitImg from "../assets/fruits.webp";
import { createArticle, createHeader, createParagraph, createFigure } from "./page-utils";

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

        const figure = createFigure({
            regularSrc: fruitImg,
            optimalSrc: fruitImg,
            altText: "An assortment of happy, dancing fruits",
            captionText: "just some good ol' fruit!",
            captionClasses: ["quirk", "john"]
        })
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