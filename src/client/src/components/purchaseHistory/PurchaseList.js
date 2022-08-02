import React from "react";
import { Purchase } from "./Purchase";
import { ApiContext } from "../../context/ApiContext";


export default function Purchases() {
  const {purchases} = React.useContext(ApiContext)
  return (
    <>
      <div className="purchases ">
        <h2>Purchases from the Market</h2>
        <div className="container">
          <ul className="purchaseList">
            {purchases.map((purchase) => (
              <Purchase
                ingredientName={purchase.name}
                quantity={purchase.quantity}
                key={purchase._id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
