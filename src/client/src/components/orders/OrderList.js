import React from "react";
import { Order } from "./Order";
import { ApiContext } from "../../context/ApiContext";

export default function Orders() {
  const {orders} = React.useContext(ApiContext)
  return (
    <>
      <div className="orders">
        <h2>Orders</h2>
        <div className="container">
          {orders.map((order) => (
            <Order
              recipe={order.recipe}
              order={order.order}
              status={order.status}
              key={order._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
