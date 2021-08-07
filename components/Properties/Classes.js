import React from "react"
const Classes = ({ classes }) => classes.map(playerClass =>
  <li key={playerClass.index}>{playerClass.name}</li>
)

export default Classes