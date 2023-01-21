const express = require("express");
const app = express();
const port = 3000;

const rooms = [
    { id: 1, area: 30, type: "salon", description: "grand salon avec vue sur le jardin", floor: 0 },
    { id: 2, area: 20, type: "salle à manger", description: "...", floor: 0 },
    { id: 3, area: 10, type: "cuisine", description: "...", floor: 0 },
    { id: 4, area: 2, type: "toilette", description: "...", floor: 0 },
    { id: 5, area: 16, type: "chambre", description: "...", floor: 1 },
    { id: 6, area: 10, type: "chambre", description: "...", floor: 1 },
    { id: 7, area: 10, type: "chambre", description: "...", floor: 1 },
    { id: 8, area: 10, type: "salle de bain", description: "...", floor: 1 },
];

app.use(express.static("public"));

app.get("/rooms", function (request, response) {
    return response.json(rooms);
});

app.listen(port, () => console.log(`prêt sur http://localhost:${port}`));
