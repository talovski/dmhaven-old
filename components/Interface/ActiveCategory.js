import React from "react"
import EquipList from "../EquipList"
import SpellsList from "../SpellList"
import ConditionList from "../ConditionList"
import MonstersList from "../MonstersList"

const ActiveCategory = ({ activeFilter, activeSearch }) => {
  function screen (activeFilter) {
    if (activeFilter === "equipment")  return <EquipList activeSearch={activeSearch} /> 
    if (activeFilter === "spells")     return <SpellsList activeSearch={activeSearch} />
    if (activeFilter === "conditions") return <ConditionList activeSearch={activeSearch} />
    if (activeFilter === "monsters")   return <MonstersList activeSearch={activeSearch} />

  }

  return <div>{screen(activeFilter)}</div>
}

export default ActiveCategory