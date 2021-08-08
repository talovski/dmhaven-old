import { gql } from '@apollo/client'

export const ALL_MONSTERS = gql`
  query ALL_MONSTERS {
    monsters {
      index
      name
      challenge_rating
      armor_class
      hit_points
      hit_dice
      reactions {
        desc
      }

    }
}`