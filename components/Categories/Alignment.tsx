import React, { FC } from 'react'
import Name, { NameType } from '../Properties/Name'
import Desc, { DescType } from '../Properties/Desc'

export type AlignmentType = {
  name: NameType
  desc: DescType
}

type AlignmentProps = {
  alignment: AlignmentType
}

const Alignment: FC<AlignmentProps> = ({ alignment }) => {
  return (
    <div className="border-2 rounded-lg my-2 mr-2 px-2 py-4">
      <Name name={alignment.name} />
      {alignment.desc && <Desc desc={alignment.desc} />}
    </div>
  )
}

export default Alignment
