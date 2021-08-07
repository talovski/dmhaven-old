import React from "react"
const Desc = ({ desc }) => desc.map(paragraph => <p key={paragraph}>{paragraph}</p>)

export default Desc