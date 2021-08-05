import { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import Search from "./Search"

export const ALL_SPELLS = gql`
  query allSpells {
    spells {
      name
      desc
      classes {
        name
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
    
    {filteredSpells.map((spell) => (
      <div className="max-w-prose">
        <p className="pt-2 font-bold text-xl">{spell.name}</p>
        <p>{spell.desc}</p>
        <p className="font-bold">Classes:</p>
        <ul>
          {spell.classes.map(playerClass =>
            <li key={playerClass.name}>{playerClass.name}</li>
          )}
        </ul>
      </div>
    ))}
    
    </div> 
  )
}