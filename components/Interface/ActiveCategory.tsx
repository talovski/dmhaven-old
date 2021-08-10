import React, { FC } from 'react'
import EquipList from '../EquipList'
import SpellsList from '../SpellList'
import ConditionList from '../ConditionList'
import MonstersList from '../MonstersList'

type ActiveCategoryProps = {
  activeFilter: string
  activeSearch: string
}

const ActiveCategory: FC<ActiveCategoryProps> = ({
  activeFilter,
  activeSearch
}) => {
  function screen(activeFilter) {
    if (activeFilter === 'equipment')
      return <EquipList activeSearch={activeSearch} />
    if (activeFilter === 'spells')
      return <SpellsList activeSearch={activeSearch} />
    if (activeFilter === 'conditions')
      return <ConditionList activeSearch={activeSearch} />
    if (activeFilter === 'monsters')
      return <MonstersList activeSearch={activeSearch} />
    return (
      <div>
        <p>Select a category to get started</p>
      </div>
    )
  }

  return <div>{screen(activeFilter)}</div>
}

export default ActiveCategory
