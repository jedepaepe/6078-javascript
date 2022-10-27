let cards = document.getElementById("cards");
cards.append(createCard("Tarte aux pommes", "https://via.placeholder.com/150", "./recettes/tarte-aux-pommes.html", 15));
cards.append(createCard("Gateau au chocolat", "https://via.placeholder.com/150", "./recettes/gateau-au-chocolat.html", 20));
cards.append(createCard("Gateau marbré", "https://via.placeholder.com/150", "./recettes/gateau-au-chocolat.html", 20));
cards.append(createCard("Tarte aux groseilles", "https://via.placeholder.com/150", "./recettes/gateau-au-chocolat.html", 20));


function createCard(title, imgSrc, href, duration) {
    let div = document.createElement("div");
    
    let h3 = document.createElement("h3");
    h3.innerText = title;
    div.append(h3);

    let paragraph = document.createElement("p");
    let anchor = document.createElement("anchor");
    anchor.href = href;
    let image = document.createElement("img");
    image.src = imgSrc;
    image.alt = title;
    anchor.append(image);
    paragraph.append(anchor);
    div.append(paragraph);

    paragraph = document.createElement("p");
    paragraph.innerText = duration + " minutes de préparation";
    div.append(paragraph);

    return div;
}