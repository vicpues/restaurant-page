import { createArticle, createHeader, createParagraph } from "./page-utils";

export default function generateAboutPage() {
    const content = [];


    content.push((() => {
        const article = createArticle();
        article.appendChild(createHeader("Our mission"));
        article.appendChild(createParagraph("Alternian Provisions started with a simple dream: to deliver strictly edible matter to your hunger flap and extract a market-equivalent amount of boondollars from your porkhollow portfolio. Yum."));
        article.appendChild(createParagraph("From its humble beginnings of not yet existing, Alternian Provisions has expanded into a thriving, FDA compliant establishment serving double-digits of customers every day."));
        return article;
    })());


    content.push((() => {
        const article = createArticle();
        article.appendChild(createHeader("Our staff"));
        const para = createParagraph("You do not need to know a8out this :::;)");
        para.ariaLabel = "Vriska says: You do not need to know about this";
        para.classList.add("quirk", "vriska");
        article.appendChild(para);
        return article;
    })());

    return content;
}