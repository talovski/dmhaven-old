import { gql } from "@apollo/client"

export const ALL_EQUIPMENT = gql`
  query ALL_EQUIPMENT {
    equipments {
      index
      name
      equipment_category {
        name
      }
      cost {
        quantity
        unit
      }
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