import { ApiReference } from './api-reference';

export type AlignmentShort = ApiReference & {
	abbreviation: string;
	desc: string[];
};
