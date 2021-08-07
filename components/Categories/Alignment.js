import Desc from "../Properties/Desc"
import Name from "../Properties/Name"

  const Alignment = ({ alignment }) => {
    return (
      <div className="max-w-prose md:w-full">
        <Name name={alignment.name} />
        {alignment.desc && <Desc desc={alignment.desc} /> }
      </div>
    )
}

export default Alignment