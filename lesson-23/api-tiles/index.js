const { MongoClient } = require("mongodb");
const express = require("express");

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    await client.connect();
    console.log("db connected");

    const app = express();
    const port = 3000;

    app.use(express.static("public"));

    app.get("/tiles", function (request, response) {
        try {
            const tiles = client.db("contacts").collection("tiles").find().toArray();
            response.json(tiles);
        } catch (err) {
            response.status(500).send(error);
        } 
    });

    app.listen(port, () => console.log(`ready on http://localhost:${port}`));
}

main().catch(console.err);