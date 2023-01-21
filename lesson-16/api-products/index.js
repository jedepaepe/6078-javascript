const express = require("express");
const app = express();
const port = 3000;

const products = [
    { id: 1, label: "anana", price: 4.24, description: "anana frais de ..." },
    { id: 2, label: "pommes au kg", price: 3.76, description: "pommes d'api au kg" },
];

app.use(express.static("public"));

app.get("/products", function (request, response) {
    return response.json(products);
});

app.listen(port, () => console.log(`prêt sur http://localhost:${port}`));
