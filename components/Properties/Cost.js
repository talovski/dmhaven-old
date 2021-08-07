import React from "react"
const Cost = ({ cost }) => (
  <div>
    <p>Cost</p>
    <p>Unit — {cost.unit} </p>
    <p>Quantity — {cost.quantity} </p>
  </div>
)

export default Cost