export function createArticle() {
    const article = document.createElement("article");
    article.classList.add("body-article");
    return article;
}

export function createHeader(text) {
    const header = document.createElement("h3");
    header.textContent = text;
    return header;
}

export function createParagraph(text) {
    const para = document.createElement("p");
    para.classList.add("body-para");
    para.textContent = text;
    return para;
}