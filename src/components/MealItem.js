const MealItem = ({ meal }) => {
  // last commit
  return (
    <div className="w-1/4 p-8 shadow-lg rounded-lg bg-yellow-50">
      <img src={meal.image} className="w-auto h-auto" alt="Chicken Salad" />
      <div className="text-center py-2">
        <h3 className="text-xl font-normal">
          {meal.name}
          <span className="px-3 font-light text-yellow-500">
            ({meal.ingredients} ingredients)
            ({meal.method} method)
            ({meal.description} description)
          </span>
        </h3>
        <p className="text-gray-500 text-base">{meal.author}</p>
      </div>
    </div>
  );
};
export default MealItem;
