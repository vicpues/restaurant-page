import fruitsLegacyLarge from "../assets/legacy-large/fruits-large.gif";
import fruitsLegacySmall from "../assets/legacy-small/fruits-small.gif";
import fruitsWebpLarge from "../assets/webp-large/fruits-large.webp";
import fruitsWebpSmall from "../assets/webp-small/fruits-small.webp";

import soporLegacySmall from "../assets/legacy-small/sopor-slime-small.png";
import soporWebpSmall from "../assets/webp-small/sopor-slime-small.webp";

import steakLegacySmall from "../assets/legacy-small/lightly-irradiated-small.gif";

import pumpkinLegacySmall from "../assets/legacy-small/pumpkin.gif";

import cornLegacySmall from "../assets/legacy-small/candy-corn.gif";

import faygoLegacySmall from "../assets/legacy-small/eridan-faygo-small.gif";


import bluhLegacyLarge from "../assets/legacy-large/bluh-large.gif";
import bluhLegacySmall from "../assets/legacy-small/bluh-small.gif";

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
            legacySrcLarge: fruitsLegacyLarge,
            legacySrcSmall: fruitsLegacySmall,
            optimalSrcLarge: fruitsWebpLarge,
            optimalSrcSmall: fruitsWebpSmall,
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
            legacySrcSmall: soporLegacySmall,
            optimalSrcSmall: soporWebpSmall,
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
            legacySrcSmall: steakLegacySmall,
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
            legacySrcSmall: pumpkinLegacySmall,
            altText: "A pumpkin...?",
            captionText: "",
            captionClasses: "",
        });
        figure.querySelector("picture").style.marginBottom = 0;
        article.appendChild(figure);

        figure.addEventListener("mouseover", () => {
            const paraHeight = `${figure.querySelector("picture").offsetHeight}px`;
            const newPara = createParagraph("What pumpkin??");
            newPara.style.height = paraHeight;
            newPara.style.lineHeight = paraHeight;
            newPara.style.marginBlock = "0";
            figure.remove();
            article.appendChild(newPara);
        });

        return article;
    })());


    content.push((() => {
        const article = createArticle();

        const header = createHeader("candy-corn.gif");
        article.appendChild(header);

        const figure = createFigure({
            legacySrcSmall: cornLegacySmall,
            altText: "A very small image of a piece of candy corn",
            captionText: "THIS WAS JUST SITTING IN OUR SOURCE FILES. WHAT A WASTE.",
            captionAlt: "Karkat says: This was just sitting in our source files. What a waste.",
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
            legacySrcSmall: faygoLegacySmall,
            altText: "Eridan holding a bottle of Faygo",
            captionText: "OOOH NO, W3'R3 NOT DO1NG TH1S.",
            captionAlt: "Terezi says: Ohh no, we're not doing this.",
            captionClasses: ["quirk", "terezi"],
        });
        article.appendChild(figure);

        article.addEventListener("mouseover", () => {
            figure.querySelector("picture").replaceWith(createPicture({
                legacySrcLarge: bluhLegacyLarge,
                legacySrcSmall: bluhLegacySmall,
                altText: "Eridan spitting out the faygo and saying 'BLUH'",
            }));
        });

        article.addEventListener("mouseout", () => {
            figure.querySelector("picture").replaceWith(createPicture({
                legacySrcSmall: faygoLegacySmall,
                altText: "Eridan holding a bottle of Faygo",
            }));
        });

        
        return article;
    })());


    return content;
}