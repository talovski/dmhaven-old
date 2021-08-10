import React, { FC } from 'react'

export type ArmorClassType = {
  base: number
  dex_bonus?: boolean
  max_bonus?: number
}
type ArmorClassProps = {
  armorClass: ArmorClassType
}

const ArmorClass: FC<ArmorClassProps> = ({ armorClass }) => (
  <div>
    {armorClass.base && <p>Armor class — base: {armorClass.base}</p>}
    {armorClass.dex_bonus && (
      <p>Armor class — dex bonus: {armorClass.dex_bonus}</p>
    )}
    {armorClass.max_bonus && (
      <p>Armor class — max bonus: {armorClass.max_bonus}</p>
    )}
  </div>
)

export default ArmorClass
