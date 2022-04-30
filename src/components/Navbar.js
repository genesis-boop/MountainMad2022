import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className=" bg-green-300 header p-2">
      <div className=" overflow-x-auto overflow-y-hidden container mx-auto flex justify-between">
        <nav className="my-0 relative sm:container mx-auto flex gap-3 sm:gap-10">
          <Link href="/">
            <a className="text-2xl font-bold text-blue">About</a>
          </Link>
          <Link href="/Recipes">
            <a className="text-2xl font-bold text-gray-900">Recipes</a>
          </Link>
          <Link href="/Ingredients">
            <a className="text-2xl font-bold text-gray-900">Create</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
