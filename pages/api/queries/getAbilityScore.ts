import { gql } from '@apollo/client';

export const getAbilityScore = gql(`
  query AbilityScoreQuery($index: String) {
  abilityScore(index: $index) {
    index
    name
  }
}
`);
