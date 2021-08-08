import { gql } from '@apollo/client'

export const ALL_CONDITIONS = gql`
  query ALL_CONDITIONS {
    conditions {
      name
      desc
  }
}
`