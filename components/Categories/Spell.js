import React from "react"

import Desc from "../Properties/Desc"
import Damage from '../Properties/Damage'
import Classes from "../Properties/Classes"
import Name from "../Properties/Name"

  const Spell = ({ spell }) => {
    return (
      <div className="max-w-prose md:w-full">
        <Name name ={spell.name}/>
        {spell.desc && <Desc desc={spell.desc} /> }
        {spell.damage && <Damage damage={spell.damage} />}
      
        <p className="font-bold">Classes:</p>
        {spell.classes && <Classes classes={spell.classes}/>}
      </div>
    )
}

export default Spell