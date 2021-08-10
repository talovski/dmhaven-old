import React, { FC } from 'react'
import Masonry from 'react-masonry-css'
import { useQuery } from '@apollo/client'
import { ALL_SPELLS } from '../lib/spellQuery'
import { ActiveSearchType } from '../pages'

import Spell from './Categories/Spell'

const SpellsList: FC<ActiveSearchType> = ({ activeSearch }) => {
  const { loading, error, data } = useQuery(ALL_SPELLS)

  if (error) return <div>Error loading items</div>
  if (loading) return <div>Loading items</div>

  const { spells: allSpells } = data

  const filteredSpells = allSpells.filter((spell) => {
    //include classes associated with spells into search scope
    const nameObj = spell.classes.map((playerClass) => playerClass.name)
    const name = nameObj.map((spell) => spell.toLowerCase())

    return (
      name.includes(activeSearch.toLowerCase()) ||
      spell.name.toLowerCase().includes(activeSearch.toLowerCase())
    )
  })

  return (
    <Masonry breakpointCols={3} className="flex ml-0 mr-2 w-auto">
      {filteredSpells.map((spell) => (
        <Spell key={spell.index} spell={spell} />
      ))}
    </Masonry>
  )
}
export default SpellsList
