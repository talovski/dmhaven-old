import { useState } from "react"
import SearchButton from "./SearchButton"

function Search ({
  activeFilter, setActiveFilter,
  selectSpells, setSelectSpells,
  selectEquipment, setSelectEquipment
}) {
  const [searchEquipment,   setSearchEquipment]   = useState("")
  const [searchSpells,      setSearchSpells]      = useState("")

  const [activeSearch, setActiveSearch] = useState()

  const handleSpellsButtonClick = () => {
    setActiveFilter("spells")
    setSelectSpells(true)
    setSelectEquipment(false)
  }
  const handleEquipmentsButtonClick = () => {
    setActiveFilter("equipment")
    setSelectSpells(false)
    setSelectEquipment(true)
  }
  


  return (
    <div className="max-w-prose md:w-full">
      <input 
        onChange={(event) => setActiveSearch(event.target.value)}
        className="px-3 py-1 border-2 rounded-lg border-gray-200 outline-none"
        type="text"
        value={searchSpells}
      />
  
      <div className="my-2 flex flex-row flex-wrap justify-between align-middle">
        <SearchButton activateFilter={handleEquipmentsButtonClick} text="Equipment" />
        <SearchButton activateFilter={handleSpellsButtonClick} text="Spells" />
        {/* <SearchButton activateFilter={selectedFilter} text="Classes" /> */}
        {/* <SearchButton activateFilter={selectedFilter} text="Backgrounds" /> */}
      </div>
    </div>
  )
}

export default Search