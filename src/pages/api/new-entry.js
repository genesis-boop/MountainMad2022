import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const DATABASE_NAME = "Grandma";
  const DATABASE_PASSWORD = "1234567H";

  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`
    );
    const db = client.db();
    const mealsCollection = db.collection("recipe");
    await mealsCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Meal inserted" });
  }
};

export default handler;