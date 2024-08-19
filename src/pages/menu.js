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