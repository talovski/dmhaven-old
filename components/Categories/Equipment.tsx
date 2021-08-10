import React, { FC } from 'react'

import Name, { NameType } from '../Properties/Name'
import Desc, { DescType } from '../Properties/Desc'
import Damage, { DamageType } from '../Properties/Damage'
import ArmorClass, { ArmorClassType } from '../Properties/ArmorClass'
import Range, { RangeType } from '../Properties/Range'
import { CostType } from '../Properties/Cost'

export type EquipmentCategoryType = {
  name: string
  index?: string
}

export type EquipmentType = {
  name: NameType
  equipment_category: EquipmentCategoryType
  cost?: CostType
  desc?: DescType
  damage: DamageType
  two_handed_damage: DamageType
  armorClass: ArmorClassType
  armor_class: ArmorClassType
  range: RangeType
}

type EquipmentProps = {
  equipment: EquipmentType
}

const Equipment: FC<EquipmentProps> = ({ equipment }) => {
  return (
    <div className="border-2 rounded-lg my-2 mr-2 px-2 py-4">
      <Name name={equipment.name} />
      {equipment.equipment_category && (
        <p className="font-bold">{equipment.equipment_category.name}</p>
      )}
      {equipment.cost && <p>Cost {equipment.cost.quantity}</p>}
      {equipment.desc && <Desc desc={equipment.desc} />}

      {equipment.damage && <Damage damage={equipment.damage} />}
      {equipment.two_handed_damage && (
        <Damage damage={equipment.two_handed_damage} />
      )}

      {equipment.armor_class && (
        <ArmorClass armorClass={equipment.armor_class} />
      )}

      {equipment.range && <Range range={equipment.range} />}
    </div>
  )
}

export default Equipment
