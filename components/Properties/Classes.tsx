import React, { FC } from 'react'

export type PlayerClassType = {
  index: string
  name: string
}

export type ClassesType = PlayerClassType[]

type ClassesProps = {
  classes: ClassesType
}

const Classes: FC<ClassesProps> = ({ classes }) => (
  <div>
    {classes.map((playerClass) => (
      <li key={playerClass.index}>{playerClass.name}</li>
    ))}
  </div>
)

export default Classes
