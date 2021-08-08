import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_CONDITIONS } from "../lib/conditionQuery"
import Condition from './Categories/Condition'


export default function ConditionList () {
  const { loading, error, data } = useQuery(ALL_CONDITIONS)

  if (error) return <div>Error loading conditions</div>
  if (loading) return <div>Loading conditions</div>
  const { conditions: allConditions } = data
  
  // const filteredSpells = allConditions.filter(condition => {
  //   const nameObj = condition.classes.map(playerClass => playerClass.name)
  //   const name = nameObj.map(spell => spell.toLowerCase())
  //   return name.includes(activeSearch.toLowerCase()) ||
  //     condition.name.toLowerCase().includes(activeSearch.toLowerCase())
  //   })
    
  return (
    <div className="p-4 pt-6">
    {allConditions.map((condition) => 
      <Condition key={condition.index} condition={condition} />
    )}
    </div> 
  )
}