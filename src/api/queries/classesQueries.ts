import { gql } from 'graphql-request';

export const getClasses = gql`
	query Classes {
		classes {
			index
			name
			saving_throws {
				index
				name
			}
			spellcasting {
				info {
					name
				}
				level
				spellcasting_ability {
					index
					name
				}
			}
			spells {
				name
			}
			subclasses {
				index
				name
			}
		}
	}
`;
