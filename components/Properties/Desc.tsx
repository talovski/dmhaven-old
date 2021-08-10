import React, { FC } from 'react'

export type DescType = string[]

export type DescProps = {
  desc: DescType
}

const Desc: FC<DescProps> = ({ desc }) => (
  <>
    {desc.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </>
)
export default Desc
