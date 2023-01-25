const express = require("express");
const app = express();
const port = 3000;

const tiles = [
    { id: 0, title: "Alfred", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 1" },
    { id: 1, title: "Sarah", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 2" },
    { id: 2, title: "Josette", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 3" },
    { id: 3, title: "Romain", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 4" },
    { id: 4, title: "Didier", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 5" },
    { id: 5, title: "Joëlle", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 6" },
    { id: 6, title: "Susa", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 7" },
    { id: 7, title: "Françoise", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 8" },
    { id: 8, title: "Romane", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 9" },
    { id: 9, title: "René", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 10" },
    { id: 10, title: "Joseph", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 11" },
    { id: 11, title: "Milo", image: "https://via.placeholder.com/300x200.png", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit 12"},
];

app.use(express.static("public"));

app.get("/tiles", function (request, response) {
    return response.json(tiles);
});

app.listen(port, () => console.log(`ready on http://localhost:${port}`));