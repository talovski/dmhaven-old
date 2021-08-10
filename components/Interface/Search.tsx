import React, { FC } from 'react'
import SearchButton from './SearchButton'

type SearchProps = {
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>
  setActiveSearch: React.Dispatch<React.SetStateAction<string>>
  activeSearch: string
}

const Search: FC<SearchProps> = ({
  setActiveFilter,
  setActiveSearch,
  activeSearch
}) => {
  const handleInputChange = (event) => setActiveSearch(event.target.value)

  const handleSpellsButtonClick = () => setActiveFilter('spells')
  const handleEquipmentsButtonClick = () => setActiveFilter('equipment')
  const handleConditionsButtonClick = () => setActiveFilter('conditions')
  const handleMonstersButtonClick = () => setActiveFilter('monsters')

  return (
    <div className="max-w-prose md:w-full">
      <input
        className="px-3 py-1 border-2 rounded-lg border-gray-200 outline-none"
        onChange={handleInputChange}
        value={activeSearch}
        type="text"
      />

      <div className="my-2 flex flex-row flex-wrap justify-start align-middle">
        <SearchButton
          activateFilter={handleEquipmentsButtonClick}
          text="Equipment"
        />
        <SearchButton activateFilter={handleSpellsButtonClick} text="Spells" />
        <SearchButton
          activateFilter={handleConditionsButtonClick}
          text="Conditions"
        />
        <SearchButton
          activateFilter={handleMonstersButtonClick}
          text="Monsters"
        />
      </div>
    </div>
  )
}

export default Search
