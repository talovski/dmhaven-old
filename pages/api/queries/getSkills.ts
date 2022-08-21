import { gql } from "@apollo/client";

export const getSkills = gql(`
  query Skills {
    skills {
      index
      name
      desc
      ability_score {
        index
        name
        full_name
      }
    }
  }
`)