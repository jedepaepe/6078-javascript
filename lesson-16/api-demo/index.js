const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (request, response) {
    response.send("contact api");
});

app.listen(port, () => console.log(`prêt sur http://localhost:3000`));