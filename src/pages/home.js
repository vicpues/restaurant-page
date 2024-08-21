import adsImg from "../assets/commercial-partners.webp";
import {createArticle, createHeader, createParagraph, createFigure} from "./page-utils";

export default function generateHomePage() {

    const content = [];

    content.push((() => {
        const article = createArticle();

        const header = document.createElement("h2");
        header.textContent = "Welcome to Alternian Provisions";
        article.appendChild(header);

        const para = createParagraph(`"Where every bite immediately follows the last"`)
        article.appendChild(para);

        return article;
    })());


    content.push((() => {
        const article = createArticle();
        const figure = createFigure({
            regularSrc: adsImg,
            optimalSrc: adsImg,
            altText: "A wonderful spread of tasteful banner ads",
            captionText: "Please enjoy these delightful and uplifting messages, courtesy of our commercial partners",
        })
        article.appendChild(figure);
        return article;
    })());

    
    content.push((() => {
        const article = createArticle();
        article.appendChild(createHeader("Opening hours"));
        article.appendChild(createParagraph("Our schedule has been optimized in a state-of-the-art testing environment to extract the maximum amount of currency from our patrons."));
        article.appendChild(createParagraph("Monday: 09:02 - 18:45"));
        article.appendChild(createParagraph("Tuesday: 09:17 - 19:02"));
        article.appendChild(createParagraph("Wednesday: 08:57 - 20:05:33"));
        article.appendChild(createParagraph("Thursday: 09:38 - 14:41"));
        article.appendChild(createParagraph("Friday: 15:42 - 21:40"));
        article.appendChild(createParagraph("Saturday: 11:11 - 33:33"));
        article.appendChild(createParagraph("Sunday: 21:25 - 21:43"));
        return article;
    })());

    return content;
}
