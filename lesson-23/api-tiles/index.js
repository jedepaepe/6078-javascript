const { MongoClient } = require("mongodb");
const express = require("express");

async function main() {
    const uri = "mongodb+srv://<user>:<password>@<server>/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    console.log("db connected");

    const app = express();
    const port = 3000;

    app.use(express.static("public"));

    app.get("/tiles", async function (request, response) {
        try {
            const tiles = await client.db("contacts").collection("tiles").find().toArray();
            console.log(tiles);
            response.json(tiles);
        } catch (err) {
            response.status(500).send(error);
        } 
    });

    app.listen(port, () => console.log(`ready on http://localhost:${port}`));
}

main().catch(console.err);