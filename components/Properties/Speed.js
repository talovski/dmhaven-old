const Speed = ({ speed }) => {
  const speed = Object.entries(speed)
  return (
    <>
      {speed.map(prop => <p>{prop[0]} — {prop[1]}</p>)}
    </>
  )
}

export default Speed
