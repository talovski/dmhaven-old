
const DamageLevel = ({ damage, type }) => {
  const arr = Object.entries(damage)
  const mapArr = arr.map(item => <p>Level {item[0]} — Damage {item[1]}</p>)
  return (
    <div>
      <h3>Damage at {type} level</h3>
      {arr.map(item => <p>Level {item[0]} — Damage {item[1]}</p>)}
    </div>
  )
}

export default DamageLevel