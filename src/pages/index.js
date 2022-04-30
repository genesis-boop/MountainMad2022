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
      <img
        src={bgKitchen}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <Navbar />
      <LandingPage />
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
      //temporary data
      mealList: [
        {
          id: "1",
          name: "Chicken",
        },
      ],
    },
  };
}
export default HomePage;
