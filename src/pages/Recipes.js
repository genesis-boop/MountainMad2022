import React from "react";
//import navbar
import Navbar from "../components/Navbar";

function Recipes() {
  return (
    <div>
      <Navbar />
      <main className="bg-night-200 min-h-screen p-4 sm:p-12">
        <section className="container mx-auto ">
          <h1 className="text-5xl flex justify-center text-code text-blue-500">
            Recipes
          </h1>
          <h2 className="text-lg flex justify-center mb-12 text-blue-500 text-code mt-1">
            All the tasty recipes
          </h2>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-gray-300 text-cs mt-4 flex flex-col bg-blue-200">
              <p className="text-xl font-bold text-blue-500">Recipe Name</p>
            </div>
            <div className="text-gray-300 text-cs mt-4 flex flex-col bg-blue-200">
              <p className="text-xl font-bold text-blue-500">Recipe Name 2</p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Recipes;
