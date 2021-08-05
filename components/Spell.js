
const Spell = ({ spell }) => {
  const desc = spell.desc.map(paragraph => <p>{paragraph}</p>)
  const classList = spell.classes.map(playerClass =>
    <li key={playerClass.index}>{playerClass.name}</li>
  )
  // TODO: return damage only if not undefined
  // and return damage_at_slot_level and damage_at_character_level only if not undefined
  // FIX KEY WARNINGS

  return (
    <div className="max-w-prose md:w-full">
      <p className="pt-2 font-bold text-xl">{spell.name}</p>
      <div>{desc}</div>
      <p className="font-bold">Classes:</p>
      <ul>
        {classList}
      </ul>
    </div>
)
}
export default Spell