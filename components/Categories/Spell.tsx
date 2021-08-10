import React, { FC } from 'react'

import Desc, { DescType } from '../Properties/Desc'
import Damage, { DamageType } from '../Properties/Damage'
import Classes, { ClassesType } from '../Properties/Classes'
import Name, { NameType } from '../Properties/Name'

type SpellType = {
  name: NameType
  desc: DescType
  damage: DamageType
  classes: ClassesType
}

type SpellProps = {
  spell: SpellType
}

const Spell: FC<SpellProps> = ({ spell }) => {
  return (
    <div className="border-2 rounded-lg my-2 mr-2 px-2 py-4">
      <Name name={spell.name} />
      {spell.desc && <Desc desc={spell.desc} />}
      {spell.damage && <Damage damage={spell.damage} />}

      <p className="font-bold">Classes:</p>
      {spell.classes && <Classes classes={spell.classes} />}
    </div>
  )
}

export default Spell
