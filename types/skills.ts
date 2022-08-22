import { ApiReference } from './api-reference';

export type SkillShort = ApiReference & {
	desc?: string[];
	ability_score: {
		index: string;
		name: string;
		full_name: string;
	};
};
