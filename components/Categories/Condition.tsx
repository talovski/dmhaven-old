import React, { FC } from 'react'
import Desc, { DescType } from '../Properties/Desc'
import Name, { NameType } from '../Properties/Name'

type ConditionType = {
  name: NameType
  desc: DescType
}

type ConditionProps = {
  condition: ConditionType
}

const Condition: FC<ConditionProps> = ({ condition }) => {
  return (
    <div className="border-2 rounded-lg my-2 mr-2 px-2 py-4">
      <Name name={condition.name} />
      {condition.desc && <Desc desc={condition.desc} />}
    </div>
  )
}

export default Condition
