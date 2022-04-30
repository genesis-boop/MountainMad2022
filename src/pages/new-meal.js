import { useRef } from "react";
import { useRouter } from "next/router";
const NewMealForm = () => {
  // use of useRef to capture input value
  const mealNameInputRef = useRef();
  const mealImagePathInputRef = useRef();
  const DiscInputRef = useRef();
  const ingredientInputRef = useRef();
  const chefInputRef = useRef();
  const AuthorInputRef = useRef();
  const CookingMethodInputRef = useRef();

  // use of useRouter from next/router to redirect this page to the Homepage
  const router = useRouter();

  // implementation of newMealHandler function
  const newMealHandler = async (event) => {
    event.preventDefault();

    // store meal data in an object
    const mealData = {
      name: mealNameInputRef.current.value,
      image_path: mealImagePathInputRef.current.value,
      ingredients: ingredientInputRef.current.value,
      method: CookingMethodInputRef.current.value,
      author: AuthorInputRef.current.value,
      description: DiscInputRef.current.value,
    };

    // use of Fetch API to make a request to the new-meal api and get back a response
    const response = await fetch("/api/new-meal", {
      method: "POST",
      body: JSON.stringify(mealData),
      headers: {
        "content-Type": "application/json",
      },
    });

    // parses JSON response into native JavaScript objects
    const data = await response.json();

    console.log(data);

    // redirects this page to the Homepage
    router.replace("/");
  };

  const INPUT_STYLE =
    "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";

  return (
    <div className="flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <h1 className="font-light text-4xl">Add a new Meal </h1>
      <form onSubmit={newMealHandler}>
        <input
          type="text"
          placeholder="Title"
          required
          ref={mealNameInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Image URL"
          required
          ref={mealImagePathInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Author"
          required
          ref={AuthorInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Cooking Method"
          required
          ref={CookingMethodInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Ingredients (,)"
          required
          ref={ingredientInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Discription"
          required
          ref={DiscInputRef}
          className={INPUT_STYLE}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default NewMealForm;
