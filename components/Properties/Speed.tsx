import React, { FC } from 'react'

type SpeedType = {
  quantity: number,
  unit: string
}

type SpeedProps = {
  speed: SpeedType
}

const Speed: FC<SpeedProps> = ({ speed }) => {
  const arr = Object.entries(speed)
  return (
    <>
      {arr.map((prop) => (
        <p key={prop[0]}>
          {prop[0]} — {prop[1]}
        </p>
      ))}
    </>
  )
}

export default Speed
