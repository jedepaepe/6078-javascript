const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");

async function main() {
    const uri = "mongodb+srv://6078-javascript:PaA4aUX2egd0j16C@cluster0.vgckisb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    console.log("db connected");
    const collection = client.db("rh").collection("personnel");

    const app = express();
    app.use(bodyParser.json());
    
    app.post("/employee", async (request, response) => {
        try {
            const result = await collection.insertOne(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    });

    app.get("/employee", async (request, response) => {
        try {
            const data = await collection.find().toArray();
            response.json(data);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    app.get("/employee/:id", async (request, response) => {
        try {
            const data = await collection.findOne({
                _id: new ObjectId(request.params.id)
            });
            response.json(data);
        } catch (error) {
            response.status(500).send(error);
        }
    })

    const port = 3000;
    app.listen(port, () => console.log(`ready on http://localhost:${port}`));
}

main().catch(console.err);