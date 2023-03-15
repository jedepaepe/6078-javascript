const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");

async function main() {
    const uri = "mongodb+srv://6078-javascript:u3kQhWyNnk6kC9Ff@cluster0.vgckisb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    console.log("db connected");
    const collection = client.db("rh").collection("personnel");

    const app = express();
    app.use(bodyParser.json());
    
    app.post("/personel", async (request, response) => {
        try {
            const result = await collection.insertOne(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    });

    app.get("/personel", async (request, response) => {
        try {
            const data = await collection.find().toArray();
            response.json(data);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    app.get("/personel/:id", async (request, response) => {
        try {
            const data = await collection.findOne({
                _id: new ObjectId(request.params.id)
            });
            response.json(data);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    app.put("/personel/:id", async (request, response) => {
        try {
            const result = await collection.updateOne(
                { _id: new ObjectId(request.params.id) },
                { $set: request.body }
            );
            response.json(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    app.delete("/personel/:id", async (request, response) => {
        try {
            const result = await collection.deleteOne({ _id: new ObjectId(request.params.id) });
            response.json(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    const port = 3000;
    app.listen(port, () => console.log(`ready on http://localhost:${port}`));
}

main().catch(console.err);
