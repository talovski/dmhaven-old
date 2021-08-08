import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_SPELLS } from "../lib/spellQuery"

import Spell from "./Categories/Spell"

export default function SpellsList ({ activeSearch }) {

  const { loading, error, data } = useQuery(ALL_SPELLS)

  if (error) return <div>Error loading items</div>
  if (loading) return <div>Loading items</div>

  const { spells: allSpells } = data
  
  const filteredSpells = allSpells.filter(spell => {
    //include classes associated with spells into search scope
    const nameObj = spell.classes.map(playerClass => playerClass.name)
    const name = nameObj.map(spell => spell.toLowerCase())
    
    return name.includes(activeSearch.toLowerCase()) 
        || spell.name.toLowerCase().includes(activeSearch.toLowerCase())
    })
    
  return (
    <div className="p-4 pt-6">
    {filteredSpells.map((spell) => 
      <Spell key={spell.index} spell={spell} />
    )}
    </div> 
  )
}