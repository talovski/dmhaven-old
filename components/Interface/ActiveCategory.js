import React from "react"
import EquipList from "../equipList"
import SpellsList from "../spellsList"

const ActiveCategory = ({ activeFilter, activeSearch }) => {
  const res = activeFilter === "equipment" 
    ? <EquipList activeSearch={activeSearch} /> 
    : <SpellsList activeSearch={activeSearch} />

  return res
}

export default ActiveCategory