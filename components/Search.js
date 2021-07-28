import axios from 'axios'
import { useState } from 'react'

export default function Search({ baseUrl }) {
  const [userInput, setUserInput] = useState()
  const [searchResult, setSearchResult] = useState()

  const handleSpellsSubmit = (e) => {
    e.preventDefault()
    axios.get(`${baseUrl}/?name=${userInput}`).then((response) => {
      setSearchResult(response.data)
      console.log('search result', searchResult)
    })
    return <div>{searchResult}</div>
  }
  const handleInputChange = (event) => setUserInput(event.target.value)

  return (
    <div>
      <form onSubmit={handleSpellsSubmit}>
        <input
          className="px-3 py-1 border-2 rounded-lg border-gray-200 outline-none"
          onChange={handleInputChange}
          value={userInput}
          type="text"
        />
        <div className="my-2 flex flex-row justify-between align-middle w-3/4">
          <button className="border-2 hover:border-gray-500 border-gray-200 shadow-md rounded-lg py-1 px-4">
            Spells
          </button>
          <button className="border-2 border-gray-200 shadow-md rounded-lg py-1 px-4">
            Equipment
          </button>
          <button className="border-2 border-gray-200 shadow-md rounded-lg py-1 px-4">
            Weapons
          </button>
          <button className="border-2 border-gray-200 shadow-md rounded-lg py-1 px-4">
            Classes
          </button>
          <button className="border-2 border-gray-200 shadow-md rounded-lg py-1 px-4">
            Backgrounds
          </button>
        </div>
      </form>
    </div>
  )
}

/*
{
    "ability-scores":"/api/ability-scores",
    "alignments":"/api/alignments",
    "backgrounds":"/api/backgrounds",
    "classes":"/api/classes",
    "conditions":"/api/conditions",
    "damage-types":"/api/damage-types",
    "equipment-categories":"/api/equipment-categories",
    "equipment":"/api/equipment",
    "features":"/api/features",
    "languages":"/api/languages",
    "magic-items":"/api/magic-items",
    "magic-schools":"/api/magic-schools",
    "monsters":"/api/monsters",
    "proficiencies":"/api/proficiencies",
    "races":"/api/races",
    "rules":"/api/rules",
    "rule-sections":"/api/rule-sections",
    "skills":"/api/skills",
    "spells":"/api/spells",
    "subclasses":"/api/subclasses",
    "subraces":"/api/subraces",
    "traits":"/api/traits",
    "weapon-properties":"/api/weapon-properties"}
*/
