import MealList from "../components/MealList";
import { MongoClient } from "mongodb";

import Link from "next/link";
import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";
// get image from public/img/bgKitchen.jpg
import bgKitchen from "../public/img/kitchen.jpg";

const HomePage = (props) => {

  
  return (
    <div>
<<<<<<< HEAD
      <img
        src={bgKitchen}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <Navbar />
      <LandingPage />
=======
      <Navbar/>
      <MealList meals={props.mealList} />;
      <LandingPage/>
>>>>>>> 1db2816c65d84aa83754c0dbea3719f417f99c61
    </div>
  );
};
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
    //   props: {
    //     mealList: meals.map((meal) => ({
    //       id: meal._id.toString(),
    //       name: meal.name,
    //       image: meal.image_path,
    //       dish: meal.dishes,
    //       chef: meal.chef,
    //     })),
    //   },
    // };
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
export default HomePage;
