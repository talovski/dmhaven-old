import React, { FunctionComponent } from 'react'

export type NameType = string
export type NameProps = {
  name: NameType
}

const Name: FunctionComponent<NameProps> = ({ name }) => (
  <h2 className="font-bold text-xl">{name}</h2>
)

export default Name
