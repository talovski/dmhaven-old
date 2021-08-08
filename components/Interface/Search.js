import React from "react"
import SearchButton from "./SearchButton"

function Search ({
  setActiveFilter,
  setSelectSpells,
  setSelectEquipment,
  activeSearch,
  setActiveSearch,
  setSelectCondition
}) {

  const handleInputChange = (event) => {
    setActiveSearch(event.target.value)
  }

  const handleSpellsButtonClick = () => {
    setActiveFilter("spells")
    setSelectSpells(true)
    setSelectEquipment(false)
    setSelectCondition(false)
  }
  const handleEquipmentsButtonClick = () => {
    setActiveFilter("equipment")
    setSelectSpells(false)
    setSelectEquipment(true)
    setSelectCondition(false)
  }
  const handleConditionsButtonClick = () => {
    setActiveFilter("conditions")
    setSelectSpells(false)
    setSelectEquipment(false)
    setSelectCondition(true)
  }

  

  return (
    <div className="max-w-prose md:w-full">
      <input 
        onChange={handleInputChange}
        className="px-3 py-1 border-2 rounded-lg border-gray-200 outline-none"
        type="text"
        value={activeSearch}
      />
  
      <div className="my-2 flex flex-row flex-wrap justify-between align-middle">
        <SearchButton activateFilter={handleEquipmentsButtonClick} text="Equipment" />
        <SearchButton activateFilter={handleSpellsButtonClick} text="Spells" />
        <SearchButton activateFilter={handleConditionsButtonClick} text="Conditions" />
      </div>
    </div>
  )
}

export default Search