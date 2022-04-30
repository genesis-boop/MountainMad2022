import React from "react";
import MealList from "../components/MealList";
import { MongoClient } from "mongodb";
//import navbar
import Navbar from "../components/Navbar";

function Recipes(props) {
  return (
    <div>
      <main className="bg-night-200 min-h-screen p-4 sm:p-12">
        <section className="container mx-auto ">
          <h1 className="text-5xl flex justify-center text-code text-blue-500">
            Recipes
          </h1>
          <h2 className="text-lg flex justify-center mb-12 text-blue-500 text-code mt-1">
            All the tasty recipes
          </h2>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <MealList meals={props.mealList} />;
          </section>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const DATABASE_NAME = "Grandma";
  const DATABASE_PASSWORD = "1234";

  const client = await MongoClient.connect(
    `mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`
  );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        ingredients: meal.ingredients,
        method: meal.method,
        author: meal.author,
        description: meal.description
      })),
    },
  };
}

export default Recipes;
