import React from "react";

export function Recipe({ recipeName, ingredients }) {
  const ingredientsArr = [];

  ingredients?.forEach((ingredient) => {
    let name = ingredient.name[0].toUpperCase() + ingredient.name.substring(1);
    ingredientsArr.push(
      <li className="ingredient" key={ingredient.id}>
        {name}: {ingredient.quantity}
      </li>
    );
  });

  return (
    <>
      <h3>Recipe: {recipeName}</h3>
      <ul className="recipeList">{ingredientsArr}</ul>
    </>
  );
}
