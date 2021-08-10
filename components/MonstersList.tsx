import React, { FC } from 'react'
import Masonry from 'react-masonry-css'
import { useQuery } from '@apollo/client'
import { ALL_MONSTERS } from '../lib/monsterQuery'
import Monster from './Categories/Monster'
import { ActiveSearchType } from '../pages'

const MonstersList: FC<ActiveSearchType> = ({ activeSearch }) => {
  const { loading, error, data } = useQuery(ALL_MONSTERS)

  if (error) return <div>Error loading monsters</div>
  if (loading) return <div>Loading monsters</div>

  const { monsters: allMonsters } = data

  const filteredMonsters = allMonsters.filter((monster) =>
    monster.name.toLowerCase().includes(activeSearch.toLowerCase())
  )

  return (
    <Masonry breakpointCols={3} className="flex ml-0 mr-2 w-auto">
      {filteredMonsters.map((monster) => (
        <Monster key={monster.index} monster={monster} />
      ))}
    </Masonry>
  )
}

export default MonstersList
