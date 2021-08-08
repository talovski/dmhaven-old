import React from "react"
const ArmorClass = ({ armorClass }) => (
  <div>
    {armorClass.base && <p>Armor class — base: {armorClass.base}</p>}
    {armorClass.dex_bonus && <p>Armor class — dex bonus: {armorClass.dex_bonus}</p>}
    {armorClass.max_bonus && <p>Armor class — max bonus: {armorClass.max_bonus}</p>}
  </div>
)

export default ArmorClass