import React from 'react'
import Masonry from 'react-masonry-css'
import { useQuery } from '@apollo/client'
import { ALL_EQUIPMENT } from '../lib/equipmentQuery'

import Equipment from './Categories/Equipment'

export default function EquipList({ activeSearch }) {
  const { loading, error, data } = useQuery(ALL_EQUIPMENT)

  if (error) return <div>Error loading equipment</div>
  if (loading) return <div>Loading equipment</div>

  const { equipments: allEquipment } = data

  const filteredEquipment = allEquipment.filter((equipment) =>
    equipment.name.toLowerCase().includes(activeSearch.toLowerCase())
  )

  return (
    <Masonry breakpointCols={3} className="flex ml-2 w-auto">
      {filteredEquipment.map((equipment) => (
        <Equipment key={equipment.index} equipment={equipment} />
      ))}
    </Masonry>
  )
}
