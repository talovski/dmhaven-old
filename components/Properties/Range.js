const Range = ({ range }) => (
  <div>
    {range.long && <p>Long range — {range.long}</p> }
    {range.normal && <p>Normal range — {range.normal}</p> }
  </div>
)

export default Range