import React from 'react'
import Desc from '../Properties/Desc'
import Name from '../Properties/Name'

const Condition = ({ condition }) => {
  return (
    <div className="border-2 rounded-lg m-2 px-2 py-4">
      <Name name={condition.name} />
      {condition.desc && <Desc desc={condition.desc} />}
    </div>
  )
}

export default Condition
