import fruitWebp from "../assets/fruits.webp";
import soporWebp from "../assets/sopor-slime.webp";
import steakGif from "../assets/lightly-irradiated.gif";
import pumpkinWebp from "../assets/what-pumpkin.webp";
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
            regularSrc: fruitWebp,
            optimalSrc: fruitWebp,
            altText: "An assortment of happy, dancing fruits",
            captionText: "just some good ol' fruit!",
            captionClasses: ["quirk", "john"]
        });
        article.appendChild(figure);

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        const header = createHeader("Sopor slime");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: soporWebp,
            optimalSrc: soporWebp,
            altText: "A bowl of green, gooey sopor slime",
            captionText: "NOP3. DON'T 3V3N TH1NK 4BOUT 1T.",
            captionClasses: ["quirk", "terezi"],
        });
        article.appendChild(figure);

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        const header = createHeader("Lightly irradiated steak");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: steakGif,
            optimalSrc: steakGif,
            altText: "Glowing green steak",
            captionText: "a rare medium well done ^_^ (get it??)",
            captionClasses: ["quirk", "jade"],
        });
        article.appendChild(figure);

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        const header = createHeader("A pumpkin...?");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: pumpkinWebp,
            optimalSrc: pumpkinWebp,
            altText: "A pumpkin...?",
            captionText: "",
            captionClasses: "",
        });
        article.appendChild(figure);

        return article;
    })())

    content.push((() => {
        const article = createArticle();

        const header = createHeader("");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: undefined,
            optimalSrc: undefined,
            altText: undefined,
            captionText: undefined,
            captionClasses: undefined,
        });
        article.appendChild(figure);

        return article;
    })())



    return content;
}