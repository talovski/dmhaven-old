import { ApiReference } from "./api-reference";

export type AbilityScoreShort = ApiReference & {
  full_name: string;
  desc: string | string[];
  skills?: { 
    index: string;
    name: string;
    desc?: string | string[];
  }[]
}