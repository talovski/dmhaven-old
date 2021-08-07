import { gql, useQuery } from "@apollo/client"


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

export const ALL_EQUIPMENT = gql`
  query ALL_EQUIPMENT {
    equipments {
      name
      damage {
        damage_dice
        damage_type {
          name
        }
      }
      desc
      speed {
        unit
        quantity
      }
      two_handed_damage {
        damage_dice
        damage_type {
          name
        }
      }
      armor_class {
        base
        dex_bonus
        max_bonus
      }
      range {
        long
        normal
      }
      cost {
        unit
        quantity
      }
      capacity
    }
  }
`