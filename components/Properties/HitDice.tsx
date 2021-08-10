import React, { FC } from 'react'

export type HitDiceType = string
type HitDiceProps = {
  hitDice: HitDiceType
}

const HitDice: FC<HitDiceProps> = ({ hitDice }) => <p>Hit Dice: {hitDice}</p>

export default HitDice
