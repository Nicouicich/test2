import React, { useState,useEffect } from "react";
import axios from 'axios'


export function Order({ recipe, order, status }) {
  const url = process.env.REACT_APP_URL + "/recipes/"+ recipe;
  const [recipeName, setRecipeName] = useState()

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let orders = await axios.get(url);
    setRecipeName(orders.data.data.name);
  };

  return (
    <>
      <h3>
        Order: {order}
      </h3>
      <ul className="orderList">
        <li className="order">Recipe: {recipeName}</li>
        <li className="order">Status: {status}</li>
      </ul>
      
    </>
  );
}
