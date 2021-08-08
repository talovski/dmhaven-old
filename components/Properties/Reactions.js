import React from "react"
import Desc from "./Desc"

const Reactions = ({ reactions }) => (
  <div>
    <p>Reactions</p>
    {reactions.desc && <Desc desc={reactions.desc}/>}
  </div>
)

export default Reactions