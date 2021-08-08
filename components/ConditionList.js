import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_CONDITIONS } from "../lib/conditionQuery"
import Condition from './Categories/Condition'


export default function ConditionList ({ activeSearch }) {
  const { loading, error, data } = useQuery(ALL_CONDITIONS)

  if (error) return <div>Error loading conditions</div>
  if (loading) return <div>Loading conditions</div>
  const { conditions: allConditions } = data
  
  const filteredConditions = allConditions.filter(condition =>
    condition.name.toLowerCase().includes(activeSearch.toLowerCase()))    
  
  return (
    <div>
      {filteredConditions.map((condition) => 
        <Condition key={condition.index} condition={condition} />
      )}
    </div> 
  )
}