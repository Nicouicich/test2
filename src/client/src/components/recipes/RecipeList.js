/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Recipe } from "./Recipe";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const url = process.env.REACT_APP_URL + "/recipes";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let recipe = await axios.get(url)
    setRecipes(recipe.data.data);
  };
  return (
    <>
      <div className="recipes ">
        <h2>Recipes</h2>
        <div className="container">

        
        {recipes.map((recipe) => (
          <Recipe recipeName={recipe.name} ingredients={recipe.ingredients} key={recipe._id} />
        ))}
        </div>
      </div>
    </>
  );
}
