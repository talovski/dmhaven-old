import { gql } from "@apollo/client";

export const getEquipments = gql(`
  query Equipments {
    equipments {
      index
      name
      equipment_category {
        index
        name
      }
      desc
      cost {
        quantity
        unit
      }
    }
  }
`)