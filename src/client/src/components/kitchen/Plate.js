import React, {useEffect,useState} from "react";
import axios from "axios";

export function Plate({ recipe, order, status }) {
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
      <ul className="platesList">
        <li className="plate">Recipe: {recipeName}</li>
        <li className="plate">Status: {status}</li>
      </ul>
      
    </>
  );
}
