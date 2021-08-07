import React from "react"

const DamageLevel = ({ damage, type }) => {
  const arr = Object.entries(damage)
  return (
    <div>
      <h3>Damage at {type} level</h3>
      {arr.map(item => <p key={item[0]}>Level {item[0]} — Damage {item[1]}</p>)}
    </div>
  )
}

export default DamageLevel