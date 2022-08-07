import WikiLayout from '../../../components/layouts/WikiLayout';
import client from '../../api/graphql';
import { ApiReference } from '../../../types/api-reference';
import { getAbilityScores } from '../../api/queries/getAbilityScores';
import { getAbilityScore } from '../../api/queries/getAbilityScore';

type Props = {
	abilityScore: ApiReference;
};

function AbilityScore({ abilityScore }: Props) {
	console.log('ability score', abilityScore);

	return (
		<WikiLayout>
			<h1>Hi! I am ability score {abilityScore.index}</h1>
		</WikiLayout>
	);
}

export async function getStaticPaths() {
	const { data } = await client.query<{ abilityScores: ApiReference[] }>({
		query: getAbilityScores,
	});
	const abilityScores = data.abilityScores;

	const paths = abilityScores.map((abilityScore: { index: string }) => ({
		params: { abilityScore: abilityScore.index },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: string }) {
	const { data } = await client.query<{ abilityScore: ApiReference }>({
		query: getAbilityScore,
		variables: { params },
	});
	const abilityScore = data.abilityScore;

	return { props: { abilityScore } };
}

export default AbilityScore;
