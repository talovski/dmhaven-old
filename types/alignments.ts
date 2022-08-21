import { ApiReference } from "./api-reference";

export type Alignments = ApiReference & {
  abbreviation: string;
  desc: string[];
}