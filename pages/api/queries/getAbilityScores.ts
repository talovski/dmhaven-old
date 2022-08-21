import { gql } from '@apollo/client';

export const getAbilityScores = gql`
	query AbilityScoresQuery {
		abilityScores {
			index
			name
			full_name
			desc
			skills { 
				index
				name
				desc
			}
		}
	}
`;
