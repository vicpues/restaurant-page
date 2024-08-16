export default function generateHomePage() {

    const content = [];

    const article3 = createArticle();
    article3.appendChild(createHeader("Our mission"));
    article3.appendChild(createParagraph("Alternian Provisions started with a simple dream: to deliver strictly edible matter to your hunger flap and extract a market-equivalent amount of boondollars from your porkhollow portfolio. Yum."));
    article3.appendChild(createParagraph("From its humble beginnings of not yet existing, Alternian Provisions has expanded into a thriving, FDA compliant establishment serving double-digits of customers every day."));
    content.push(article3);

    const article4 = createArticle();
    article4.appendChild(createHeader("Opening hours"));
    article4.appendChild(createParagraph("Our schedule has been optimized in a state-of-the-art testing environment to extract the maximum amount of currency from our patrons."));
    article4.appendChild(createParagraph("Monday: 09:02 - 18:45"));
    article4.appendChild(createParagraph("Tuesday: 09:17 - 19:02"));
    article4.appendChild(createParagraph("Wednesday: 08:57 - 20:05:33"));
    article4.appendChild(createParagraph("Thursday: 09:38 - 14:41"));
    article4.appendChild(createParagraph("Friday: 15:42 - 21:40"));
    article4.appendChild(createParagraph("Saturday: 11:11 - 33:33"));
    article4.appendChild(createParagraph("Sunday: 21:25 - 21:43"));
    content.push(article4);

    function createArticle() {
        const article = document.createElement("article");
        article.classList.add("body-article");
        return article;
    }

    function createHeader(text) {
        const header = document.createElement("h3");
        header.textContent = text;
        return header;
    }

    function createParagraph(text) {
        const para = document.createElement("p");
        para.classList.add("body-para");
        para.textContent = text;
        return para;
    }

    return content;
}
