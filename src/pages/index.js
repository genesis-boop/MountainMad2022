import MealList from "../components/MealList";
import { MongoClient } from "mongodb";

import Link from "next/link";
import Navbar from "../components/Navbar";
// get image from public/img/bgKitchen.jpg
//import bgKitchen from "../public/img/kitchen.jpg";

const HomePage = (props) => {

  
  return (
    <div className="bg-[url('https://cdnb.artstation.com/p/assets/images/images/019/146/383/large/cartoonik-animation-cs-kitchen-bg.jpg?1562206094')] min-w-screen min-h-screen overflow-hidden bg-cover bg-center bg-clip-content">
      asjdfkjas;l
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
