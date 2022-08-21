import { ApiReference } from "./api-reference"

export type Skills = ApiReference & {
  desc?: string[];
  ability_score: {
    index: string;
    name: string;
    full_name: string;
  }
}