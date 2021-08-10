import React, { FC } from 'react'
import Masonry from 'react-masonry-css'
import { useQuery } from '@apollo/client'
import { ALL_EQUIPMENT } from '../lib/equipmentQuery'
import { ActiveSearchType } from '../pages'
import Equipment from './Categories/Equipment'

const EquipList: FC<ActiveSearchType> = ({ activeSearch }) => {
  const { loading, error, data } = useQuery(ALL_EQUIPMENT)

  if (error) return <div>Error loading equipment</div>
  if (loading) return <div>Loading equipment</div>

  const { equipments: allEquipment } = data

  const filteredEquipment = allEquipment.filter((equipment) =>
    equipment.name.toLowerCase().includes(activeSearch.toLowerCase())
  )
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex ml-0 mr-2 w-auto">
      {filteredEquipment.map((equipment) => (
        <Equipment key={equipment.index} equipment={equipment} />
      ))}
    </Masonry>
  )
}
export default EquipList
