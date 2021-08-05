import { useState } from "react"
import { gql, useQuery } from "@apollo/client"

import Search from "./Search"
import Spell from "./Spell"

export const ALL_SPELLS = gql`
  query allSpells {
    spells {
      index
      name
      desc
      classes {
        index
        name
      }
      damage {
        damage_type {
          name
        }
        damage_at_slot_level
        damage_at_character_level
      }
    }
  }
`

export default function SpellsList() {
  const [searchSpells, setSearchSpells] = useState("")

  const { loading, error, data } = useQuery(ALL_SPELLS)
  if (error) return <div>Error loading spells</div>
  if (loading) return <div>Loading spells</div>

  const { spells: allSpells } = data
  
  const filteredSpells = allSpells.filter(spell => {
    const nameObj = spell.classes.map(playerClass => playerClass.name)
    const name = nameObj.map(spell => spell.toLowerCase())
    return name.includes(searchSpells.toLowerCase()) ||
      spell.name.toLowerCase().includes(searchSpells.toLowerCase())
    })
    
  return (
    <div className="p-4 pt-6">
    
      <Search 
        searchSpells={searchSpells}
        setSearchSpells={setSearchSpells}
      />
    
    {filteredSpells.map((spell) => 
      <Spell key={spell.index} spell={spell} />
    )}
    
    </div> 
  )
}