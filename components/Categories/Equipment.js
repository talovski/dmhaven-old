import Name from "../Properties/Name"
import Desc from "../Properties/Desc"
import Damage from '../Properties/Damage'
import ArmorClass from "../Properties/ArmorClass"
import Range from "../Properties/Range"

const Equipment = ({ equipment }) => {
    return (
      <div className="max-w-prose md:w-full">
        <Name name={equipment.name} />

        {equipment.desc && <Desc desc={equipment.desc} /> }
        {equipment.damage && <Damage damage={equipment.damage} />}
        {/* {equipment.two_handed_damage && <Damage damage={equipment.two_handed_damage} />} */}
        {/* {equipment.armor_class && <ArmorClass armorClass={armor_class} />} */}
        {equipment.range && <Range range={equipment.range}/> }
      
      </div>
    )
}

export default Equipment