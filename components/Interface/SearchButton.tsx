import React, { FC } from 'react'

type SearchButtonProps = {
  text: string
  activateFilter: () => void
}

const SearchButton: FC<SearchButtonProps> = ({ text, activateFilter }) => {
  return (
    <button
      onClick={activateFilter}
      className="border-2 hover:border-gray-500 border-gray-200 shadow-md rounded-lg py-1 px-4 mr-2 mb-2">
      {text}
    </button>
  )
}

export default SearchButton
