import { ApiReference } from './api-reference';

export type ShortSpellType = ApiReference & {
	index: string;
	name: string;
	classes: ApiReference[];
	subclasses: ApiReference[];
	damage: {
		damage_type: ApiReference | ApiReference[];
	};
};

export type SpellType = ApiReference & {
	desc: string[];
	higher_level: string[];
	heal_at_slot_level: any;
	range: string;
	components: any;
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
		};
		damage_at_character_level: {
			[key: string]: any;
		};
		damage_type: ApiReference;
	};
	damage_type: ApiReference;
	dc: any;
	school: ApiReference;
	classes: ApiReference[];
	subclasses: ApiReference[];
};
