const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("*", function(req, res) {
    res.send("la ressource n'est pas trouvée");
});

app.listen( 80, () => console.log("ready http://localhost:80"));