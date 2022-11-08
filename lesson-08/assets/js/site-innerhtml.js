/**
 * crée une tuile
 * @param {string} title est le titre de la tuile
 * @param {string} image est l'url de l'image de la tuile
 * @param {string} paragraph est le texte de la tuile
 * @return {string} le code HTML de la tuile
 */
function createTile(title, image, paragraph) {
    return `
    <div>
        <h1>${title}</h1>
        <div>
            <img src="${image}" alt="${title}">
            <p>${paragraph}</p>
        </div>
    </div>
    `
}

const tiles = document.getElementById("tiles");
tiles.innerHTML = 
createTile("Alfred", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Sarah", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Josette", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Romain", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Didier", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Joëlle", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Susa", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Françoise", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Romane", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("René", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Joseph", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?") +
createTile("Milo", "https://via.placeholder.com/300x200.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?");