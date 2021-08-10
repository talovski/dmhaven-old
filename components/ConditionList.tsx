import React, { FC } from 'react'
import Masonry from 'react-masonry-css'
import { useQuery } from '@apollo/client'
import { ALL_CONDITIONS } from '../lib/conditionQuery'
import Condition from './Categories/Condition'

import { ActiveSearchType } from '../pages'

const ConditionList: FC<ActiveSearchType> = ({ activeSearch }) => {
  const { loading, error, data } = useQuery(ALL_CONDITIONS)

  if (error) return <div>Error loading conditions</div>
  if (loading) return <div>Loading conditions</div>
  const { conditions: allConditions } = data

  const filteredConditions = allConditions.filter((condition) =>
    condition.name.toLowerCase().includes(activeSearch.toLowerCase())
  )

  return (
    <Masonry breakpointCols={3} className="flex ml-0 mr-2 w-auto">
      {filteredConditions.map((condition) => (
        <Condition key={condition.index} condition={condition} />
      ))}
    </Masonry>
  )
}

export default ConditionList
