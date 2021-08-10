import React, { FC } from 'react'

export type HitPointsType = number
type HitPointsProps = {
  hitPoints: HitPointsType
}

const HitPoints: FC<HitPointsProps> = ({ hitPoints }) => (
  <p>Hit Points: {hitPoints}</p>
)

export default HitPoints
