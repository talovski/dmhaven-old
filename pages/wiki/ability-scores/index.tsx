import WikiLayout from '../../../components/layouts/WikiLayout';
import { ApiReference } from '../../../types/api-reference';
import client from '../../api/graphql';
import { getAbilityScores } from '../../api/queries/getAbilityScores';

type Props = { abilityScores: ApiReference[] };

function AbilityScores({ abilityScores }: Props) {
	return (
		<WikiLayout>
			<div>Hi! I am ability scores</div>
			<div>
				{abilityScores.map((abilityScore) => (
					<p key={abilityScore.index}>{abilityScore.name}</p>
				))}
			</div>
		</WikiLayout>
	);
}

export async function getStaticProps() {
	const { data } = await client.query<{ abilityScores: ApiReference[] }>({
		query: getAbilityScores,
	});
	return {
		props: {
			abilityScores: data.abilityScores,
		},
	};
}

export default AbilityScores;
