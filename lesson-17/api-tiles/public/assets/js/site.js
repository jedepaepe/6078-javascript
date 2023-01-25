/**
 * crée une tuile
 * @param {string} title est le titre de la tuile
 * @param {string} image est l'url de l'image de la tuile
 * @param {string} paragraph est le texte de la tuile
 * @return {Element} le <div> "tuile"
 */
function createTile(title, image, paragraph) {
    const root = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.append(document.createTextNode(title));
    root.append(h3);
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = image;
    img.alt = title;
    div.append(img);
    const p = document.createElement("p");
    p.append(document.createTextNode(paragraph));
    div.append(p);
    root.append(div);
    return root;
}

fetch("/tiles")
.then(function (response) { return response.json() })
.then(function (tiles) {
    let parent = document.getElementById("tiles");
    for(let i = 0; i < tiles.length; ++i) {
        const t = tiles[i];
        parent.append(createTile(t.title, t.image, t.paragraph));
    }
})