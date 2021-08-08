import { gql } from "@apollo/client"


export const ALL_SPELLS = gql`
  query allSpells {
    spells {
      index
      name
      desc
      classes {
        index
        name
      }
      damage {
        damage_type {
          name
        }
        damage_at_slot_level
        damage_at_character_level
      }
    }
  }
`