import React, { FC } from 'react'
import DamageLevel from './DamageLevel'

export type DamageType = {
  damage_type: {
    name: string
  }
  damage_at_slot_level?: {
    key: string
    value: string
  }
  damage_at_character_level?: {
    key: string
    value: string
  }
  damage_dice?: {
    key: string
    value: string
  }
}

type DamageProps = {
  damage: DamageType
}

const Damage: FC<DamageProps> = ({ damage }) => {
  return (
    <div>
      {damage.damage_type.name && <p>Damage type: {damage.damage_type.name}</p>}
      {damage.damage_at_slot_level && (
        <DamageLevel damage={damage.damage_at_slot_level} type="slot" />
      )}
      {damage.damage_at_character_level && (
        <DamageLevel
          damage={damage.damage_at_character_level}
          type="character"
        />
      )}
      {damage.damage_dice && <p>Damage dice: {damage.damage_dice}</p>}
    </div>
  )
}

export default Damage
