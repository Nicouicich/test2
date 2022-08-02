import React from "react";

import { Ingredient } from "./Ingredient";
import {ApiContext} from "../../context/ApiContext"
export default function Ingredients() {
  const {ingredients} = React.useContext(ApiContext)
 

  return (
    <>
      <div className="ingredients">
        <h2>Ingredients Available</h2>
        <div className="container">
          <ul>
            {ingredients.map((ingredient) => (
              <Ingredient
                name={ingredient.name}
                quantity={ingredient.quantity}
                key={ingredient._id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
