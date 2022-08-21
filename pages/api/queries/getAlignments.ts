import { gql } from "@apollo/client";

export const getAlignments = gql(`
  query Alignments {
    alignments {
      index
      abbreviation
      name
      desc
    }
  }
`)