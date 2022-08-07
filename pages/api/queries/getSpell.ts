import { gql } from '@apollo/client';

export const getSpell = gql(`
  query SpellQuery($index: String) {
  spell(index: $index) {
    area_of_effect {
      size
      type
    }
    attack_type
    casting_time
    classes {
      index
      name
    }
    components
    concentration
    damage {
      damage_at_slot_level {
        damage
        level
      }
      damage_at_character_level {
        damage
        level
      }
      damage_type {
        index
        name
      }
    }
    desc
    duration
    higher_level
    index
    level
    material
    name
    range
    ritual
    school {
      desc
      index
      name
    }
    subclasses {
      index
      name
    } 
  }
}
`);
