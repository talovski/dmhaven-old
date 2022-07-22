import { ApiReference } from './Api';

export type ShortSpell = ApiReference & {
	components: string[];
	level: number;
	classes: ApiReference[];
	subclasses: ApiReference[];
};

export type LongSpell = ApiReference & {
	desc: string[];
	higher_level: string[];
	range: string;
	components: string[];
	material: string;
	ritual: boolean;
	duration: string;
	concentration: boolean;
	casting_time: string;
	level: number;
	attack_type: string;
	damage: {
		damage_at_slot_level: {
			[key: string]: any;
		}[];
		damage_type: ApiReference;
	};
	classes: ApiReference[];
	subclasses: ApiReference[];
};
