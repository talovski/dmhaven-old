import DamageLevel from "./DamageLevel"

const Damage = ({ damage }) => {
  return (
    <div>
      <p>Damage type: {damage.damage_type.name}</p>
      {damage.damage_at_slot_level && <DamageLevel damage={damage.damage_at_slot_level} type="slot" />}
      {damage.damage_at_character_level && <DamageLevel damage={damage.damage_at_character_level} type="character" />}
      {damage.dice && <p>Damage dice: {damage.dice}</p>}
      
    </div>
  )
}

export default Damage