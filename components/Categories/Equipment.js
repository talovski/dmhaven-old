import React from "react"

import Name from "../Properties/Name"
import Desc from "../Properties/Desc"
import Damage from '../Properties/Damage'
import ArmorClass from "../Properties/ArmorClass"
import Range from "../Properties/Range"
const Equipment = ({ equipment }) => {
  return (
    <div className="max-w-prose md:w-full">
        <Name name={equipment.name} />
        {equipment.equipment_category && <p className="font-bold">{equipment.equipment_category.name}</p>}
        {equipment.cost && <p>Cost {equipment.cost.quantity}</p>}
        {equipment.desc && <Desc desc={equipment.desc} /> }
        
        {equipment.damage && <Damage damage={equipment.damage} />}
        {equipment.two_handed_damage && <Damage damage={equipment.two_handed_damage} />}
        
        {equipment.armor_class && <ArmorClass armorClass={equipment.armor_class} />}
        
        {equipment.range && <Range range={equipment.range}/> }
      
      </div>
    )
}

export default Equipment