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
        legacySrcSmall,
        legacySrcLarge,
        optimalSrcSmall,
        optimalSrcLarge,
        altText,
        captionText,
        captionAlt,
        captionClasses,
    }) {

    const picture = createPicture({
        legacySrcSmall,
        legacySrcLarge,
        optimalSrcSmall,
        optimalSrcLarge,
        altText,
    });

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


export function createPicture({
        legacySrcSmall,
        legacySrcLarge,
        optimalSrcSmall,
        optimalSrcLarge,
        altText,
    }) {
    
    const picture = document.createElement("picture");
    
    if (optimalSrcLarge) {
        const source = document.createElement("source");
        source.type = "image/webp";
        source.media = "(min-width: 400px)";
        source.srcset = optimalSrcLarge;
        picture.appendChild(source);
    };
    
    if (optimalSrcSmall) {
        const source = document.createElement("source");
        source.srcset = optimalSrcSmall;
        source.type = "image/webp";
        picture.appendChild(source);
    };
    
    if (legacySrcLarge) {
        const source = document.createElement("source");
        source.srcset = legacySrcLarge;
        source.media = "(min-width: 400px)";
        picture.appendChild(source);
    };
    
    const img = document.createElement("img");
    img.classList.add("body-image");
    img.src = legacySrcSmall;
    img.alt = altText;
    picture.appendChild(img);

    return picture;
}
