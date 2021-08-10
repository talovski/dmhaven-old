import React from 'react'

import Desc from '../Properties/Desc'
import Damage from '../Properties/Damage'
import Classes from '../Properties/Classes'
import Name from '../Properties/Name'

const Spell = ({ spell }) => {
  return (
    <div className="border-2 rounded-lg m-2 px-2 py-4">
      <Name name={spell.name} />
      {spell.desc && <Desc desc={spell.desc} />}
      {spell.damage && <Damage damage={spell.damage} />}

      <p className="font-bold">Classes:</p>
      {spell.classes && <Classes classes={spell.classes} />}
    </div>
  )
}

export default Spell
