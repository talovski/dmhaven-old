import { gql } from '@apollo/client';

export const getSpells = gql(`
  query SpellsQuery {
    spells {
      index
      name
    level
      classes {
        index
        name
      }
      subclasses {
        index
        name
      }
      damage {
        damage_type {
          index
          name
        }
      }
    }
  }
`);
