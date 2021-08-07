import { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import { ALL_EQUIPMENT } from "../lib/queries"

import Equipment from "./Categories/Equipment"

export default function EquipList() {
  const [searchEquipment, setSearchEquipment] = useState("")

  const { loading, error, data } = useQuery(ALL_EQUIPMENT)

  if (error) return <div>Error loading equipment</div>
  if (loading) return <div>Loading equipment</div>

  const { equipments: allEquipment } = data
  
  const filteredEquipment = allEquipment.filter(equipment => {
    equipment.name.toLowerCase().includes(searchEquipment.toLowerCase())
  })  

  return (
    <div className="p-4 pt-6">
    {allEquipment.map((equipment) => 
      <Equipment key={equipment.index} equipment={equipment} />
    )}
    </div> 
  )
}