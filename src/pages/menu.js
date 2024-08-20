import fruitWebp from "../assets/fruits.webp";
import soporWebp from "../assets/sopor-slime.webp";
import steakGif from "../assets/lightly-irradiated.gif";
import pumpkinWebp from "../assets/what-pumpkin.webp";
import cornGif from "../assets/candy-corn.gif";
import faygoWebp from "../assets/eridan-faygo.webp";
import { createArticle, createHeader, createParagraph, createFigure, createPicture } from "./page-utils";

export default function generateMenuPage() {
    const content = [];

    content.push((() => {
        const article = createArticle();

        const header = document.createElement("h2");
        header.textContent = "Our culinary offering";
        article.appendChild(header);

        return article;
    })());

    content.push((() => {
        const article = createArticle();

        const header = createHeader("Normal, non-radioactive fruits");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: fruitWebp,
            optimalSrc: fruitWebp,
            altText: "An assortment of happy, dancing fruits",
            captionText: "just some good ol' fruit!",
            captionAlt: "John says: Just some good old fruit!",
            captionClasses: ["quirk", "john"]
        });
        article.appendChild(figure);

        return article;
    })());

    content.push((() => {
        const article = createArticle();

        const header = createHeader("Sopor slime");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: soporWebp,
            optimalSrc: soporWebp,
            altText: "A bowl of green, gooey sopor slime",
            captionText: "HeCk YeAh MaN lEt'S mOtHeRf*CkIn Do ThIs",
            captionAlt: "Gamzee says: Heck yeah man, let's motherfucking do this",
            captionClasses: ["quirk", "gamzee"],
        });
        article.appendChild(figure);

        return article;
    })());

    content.push((() => {
        const article = createArticle();

        const header = createHeader("Lightly irradiated steak");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: steakGif,
            optimalSrc: steakGif,
            altText: "Glowing green steak",
            captionText: "a rare medium well done ^_^ (get it??)",
            captionAlt: "Jade says: A rare medium well done! Get it?",
            captionClasses: ["quirk", "jade"],
        });
        article.appendChild(figure);

        return article;
    })());

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

        figure.addEventListener("mouseover", (e) => {
            figure.remove();
            article.appendChild(createParagraph("What pumpkin??"))
        })

        return article;
    })());

    content.push((() => {
        const article = createArticle();

        const header = createHeader("candy-corn.gif");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: cornGif,
            optimalSrc: cornGif,
            altText: "A very small image of a piece of candy corn",
            captionText: "THIS WAS JUST SITTING UNUSED IN OUR SOURCE FILES. WHAT A WASTE.",
            captionAlt: "Karkat says: This was just sitting unused in our source files. What a waste.",
            captionClasses: ["quirk", "karkat"],
        });
        article.appendChild(figure);

        return article;
    })());

    content.push((() => {
        const article = createArticle();

        const header = createHeader("This thing");
        article.appendChild(header);

        const figure = createFigure({
            regularSrc: faygoWebp,
            optimalSrc: faygoWebp,
            altText: "Eridan holding a bottle of Faygo",
            captionText: "OOOH NO, W3'R3 NOT DO1NG TH1S.",
            captionAlt: "Terezi says: Ohh no, we're not doing this.",
            captionClasses: ["quirk", "terezi"],
        });
        article.appendChild(figure);

        return article;
    })());


    return content;
}