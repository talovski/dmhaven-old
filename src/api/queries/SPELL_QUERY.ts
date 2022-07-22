import { gql } from 'graphql-request';

export const getSpells = gql`
	query getSpells {
		spells {
			index
			name
			classes {
				index
				name
			}
			components
			level
			subclasses {
				index
				name
			}
		}
	}
`;

export const getSpell = gql`
	query getSpell($index: FilterFindOneSpellInput) {
		spell(filter: $index) {
			index
			name
			desc
			material
			attack_type
			casting_time
			classes {
				index
				name
			}
			components
			concentration
			damage {
				damage_type {
					index
					name
				}
				damage_at_character_level
				damage_at_slot_level
			}
			dc {
				dc_type {
					index
					name
				}
				desc
				dc_success
			}
			duration
			heal_at_slot_level
			higher_level
			level
			range
			school {
				index
				name
				desc
			}
			subclasses {
				index
				name
			}
		}
	}
`;
