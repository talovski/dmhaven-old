import Desc from "../Properties/Desc"
import Name from "../Properties/Name"

const Condition = ({ condition }) => {
  return (
    <div className="max-w-prose md:w-full">
      <Name name={condition.name} />
      {condition.desc && <Desc desc={condition.desc} /> }
    </div>
  )
}

export default Condition