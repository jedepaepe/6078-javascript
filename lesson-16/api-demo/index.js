const express = require("express");
const app = express();
const port = 3000;

const contacts = [
    { id: 1, firstName: "Ronald", lastName: "Almonce", email: "ronald.almonce@mail.com" },
    { id: 2, firstName: "Sonia", lastName: "Cornweill", email: "sonai.cornweill@mail.com" },
    { id: 3, firstName: "Zigfrid", lastName: "Vondeur", email: "zigvon@other.site" },
    { id: 4, firstName: "Camille", lastName: "Engels", email: "camille.engels@rep.be" }
];

app.use(express.static("public"));

app.get("/contacts", function (request, response) {
    return response.json(contacts);
});

app.listen(port, () => console.log(`prêt sur http://localhost:${port}`));
