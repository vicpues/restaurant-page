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

export function createFigure({
        regularSrc,
        optimalSrc,
        altText,
        captionText,
        captionAlt,
        captionClasses,
    }) {

    
    const picture = document.createElement("picture");
    
    const img = document.createElement("img");
    img.classList.add("body-image");
    img.src = regularSrc;
    img.alt = altText;
    picture.appendChild(img);
    
    if (optimalSrc) {
        const source = document.createElement("source");
        source.type = "image/webp";
        source.srcset = optimalSrc;
        picture.appendChild(source);
    };

    const caption = document.createElement("figcaption");
    caption.textContent = (captionText) ? captionText : "";
    if (Array.isArray(captionClasses)) {
        captionClasses.forEach(string => caption.classList.add(string));
    } else if (captionClasses) {
        caption.classList.add(captionClasses);
    }

    if (captionAlt) {
        caption.ariaLabel = captionAlt;
    };
    
    const figure = document.createElement("figure");
    figure.appendChild(picture);
    figure.appendChild(caption);
    return figure;
}
