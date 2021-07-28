export default function DamageInfo({ item }) {
  const damageType = item.damage_type.name

  /*
    If object has the property "damage_at_slot_level", 
    return both damageAtSlotLevel and damageType.
    Otherwise only return damageType (it is on every
    object with the "damage" property, so can be used
    as the default value)
    */

  if (item.hasOwnProperty('damage_at_slot_level')) {
    let damageAtSlotLevel = []
    for (const [key, value] of Object.entries(item.damage_at_slot_level)) {
      damageAtSlotLevel.push([key, value])
    }
    return (
      <div>
        <p className="font-mono ">Damage Type — {damageType}</p>
        {damageAtSlotLevel.map((innerArr) => (
          <p className="font-mono">
            Slot Level {innerArr[0]} — {innerArr[1]}
          </p>
        ))}
      </div>
    )
  } else {
    return <div className="font-mono">Type of damage: {damageType}</div>
  }
}
