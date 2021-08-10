import React, { FC } from 'react'

export type CostType = {
  unit: string
  quantity: number
}

type CostProps = {
  cost: CostType
}

const Cost: FC<CostProps> = ({ cost }) => (
  <div>
    <p>Cost</p>
    <p>Unit — {cost.unit} </p>
    <p>Quantity — {cost.quantity} </p>
  </div>
)

export default Cost
