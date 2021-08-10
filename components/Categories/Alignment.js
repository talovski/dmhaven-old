import React from 'react'
import Desc from '../Properties/Desc'
import Name from '../Properties/Name'

const Alignment = ({ alignment }) => {
  return (
    <div className="border-2 rounded-lg m-2 px-2 py-4">
      <Name name={alignment.name} />
      {alignment.desc && <Desc desc={alignment.desc} />}
    </div>
  )
}

export default Alignment
