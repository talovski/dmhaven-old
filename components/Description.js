export default function Description({ item }) {
  /*
    Sometimes, when the object has the "desc" property,
    it also has "higher_level" property. So, we check if
    "higher_level" is present and return both
    "desc" and "higher_level"
      */

  if (item.hasOwnProperty('higher_level')) {
    return (
      <>
        <div>
          {item.desc.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="text-l font-bold">At higher level</h3>
          {item.higher_level.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </>
    )
  }
  return (
    <div>
      {item.desc.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  )
}
