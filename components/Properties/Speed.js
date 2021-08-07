import React from "react"
const Speed = ({ speed }) => {
  const arr = Object.entries(speed)
  return (
    <>
      {arr.map(prop => <p key={prop[0]}>{prop[0]} — {prop[1]}</p>)}
    </>
  )
}

export default Speed
