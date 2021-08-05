
function Search ({ searchSpells, setSearchSpells }) {
  return (
    <div>
      <input 
        onChange={(event) => setSearchSpells(event.target.value)}
        className="px-3 py-1 border-2 rounded-lg border-gray-200 outline-none"
        type="text"
        value={searchSpells}
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
    </div>
  )
}

export default Search