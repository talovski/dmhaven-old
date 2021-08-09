import React from "react"
import SearchButton from "./SearchButton"

function Search ({
  setActiveFilter,
  activeSearch,
  setActiveSearch,
}) {

  const handleInputChange = (event) => setActiveSearch(event.target.value)

  const handleSpellsButtonClick = () => setActiveFilter("spells")
  const handleEquipmentsButtonClick = () => setActiveFilter("equipment")
  const handleConditionsButtonClick = () => setActiveFilter("conditions")
  const handleMonstersButtonClick = () => setActiveFilter("monsters")

  return (
    <div className="max-w-prose md:w-full">
      <input 
        onChange={handleInputChange}
        className="px-3 py-1 border-2 rounded-lg border-gray-200 outline-none"
        type="text"
        value={activeSearch}
      />
  
      <div className="my-2 flex flex-row flex-wrap justify-start align-middle">
        <SearchButton activateFilter={handleEquipmentsButtonClick} text="Equipment" />
        <SearchButton activateFilter={handleSpellsButtonClick} text="Spells" />
        <SearchButton activateFilter={handleConditionsButtonClick} text="Conditions" />
        <SearchButton activateFilter={handleMonstersButtonClick} text="Monsters" />
      </div>
    </div>
  )
}

export default Search