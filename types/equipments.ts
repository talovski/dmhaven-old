import { ApiReference } from "./api-reference";

export enum Curreny {
  CP = 'CP',
  SP = 'SP',
  GP = 'GP'
}

export type EquipmentsShort = ApiReference & {
  desc?: string[]
  cost?: {
    quantity: number,
    unit: Curreny
  }
  equipment_category: ApiReference
}
