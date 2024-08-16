export default function generateHomePage() {

    const content = [];

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
