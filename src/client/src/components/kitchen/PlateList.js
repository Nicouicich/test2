import React from "react";

import { Plate } from "./Plate";
import { ApiContext } from "../../context/ApiContext";

export default function PlateList() {
 const {pendingPlates} = React.useContext(ApiContext)


  return (
    <>
      <div className="kitchen">
        <h2>Plates in Kitchen</h2>
        <div className="container">
          {pendingPlates.map((plate) => (
            <Plate
              recipe={plate.recipe}
              order={plate.order}
              status={plate.status}
              key={plate._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
