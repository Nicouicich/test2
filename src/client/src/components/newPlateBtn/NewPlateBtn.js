import React from "react"
import {ApiContext} from "../../context/ApiContext"
export default function NewPlateBtn () {
  const {handlePlate} = React.useContext(ApiContext)
  return (
    <button onClick={handlePlate}>Create new plate</button>
  )
}