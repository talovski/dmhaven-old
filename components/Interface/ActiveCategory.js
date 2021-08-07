import EquipList from "../equipList"
import SpellsList from "../spellsList"

const ActiveCategory = ({ activeFilter }) => {
  const res = activeFilter === "equipment" ? <EquipList /> : <SpellsList />

  return res
}

export default ActiveCategory