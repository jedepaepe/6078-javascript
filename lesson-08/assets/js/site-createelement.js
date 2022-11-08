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

const tiles = document.getElementById("tiles");

tiles.append(createTile("Alfred", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Sarah", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Josette", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Romain", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));

tiles.append(createTile("Didier", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Joëlle", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Susa", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Françoise", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));

tiles.append(createTile("Romane", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("René", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Joseph", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));
tiles.append(createTile("Milo", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"));