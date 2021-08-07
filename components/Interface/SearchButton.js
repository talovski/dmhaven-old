const SearchButton = ({ text, activateFilter }) => (
  <button onClick={activateFilter} className="border-2 hover:border-gray-500 border-gray-200 shadow-md rounded-lg py-1 px-4">
  {text}
  </button>

)
export default SearchButton