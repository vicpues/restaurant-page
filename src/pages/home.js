export default function generateHomePage() {

    const content = [];

    const article3 = createArticle()
    article3.appendChild(createParagraph("Alternian Provisions started with a simple dream: to deliver strictly edible matter to your hunger flap and extract a market-equivalent amount of boondollars from your porkhollow portfolio. Yum."));
    article3.appendChild(createParagraph("From its humble beginnings of not yet existing, Alternian Provisions has expanded into a thriving, <em>FDA compliant</em> establishment serving double-digits of customers every day."));
    content.push(article3);

    function createArticle() {
        const article = document.createElement("article");
        article.classList.add("body-article");
        return article;
    }

    function createParagraph(text) {
        const para = document.createElement("p");
        para.textContent = text;
        return para;
    }

    return content;
}
