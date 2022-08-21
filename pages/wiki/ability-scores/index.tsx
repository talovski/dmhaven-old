import WikiLayout from '../../../components/layouts/WikiLayout';
import { AbilityScoreShort } from '../../../types/ability-scores';
import client from '../../api/graphql';
import { getAbilityScores } from '../../api/queries/getAbilityScores';

type Props = { abilityScores: AbilityScoreShort[] };

export default function AbilityScores({ abilityScores }: Props) {
	return (
		<WikiLayout>
			<h1>Hi! I am ability scores</h1>
			{abilityScores.map(abilityScore => <div key={abilityScore.index}>
				<p>{abilityScore.name} — {abilityScore.full_name}</p>
				<p>Desc</p>
				{typeof abilityScore.desc === 'string' 
					? <p>{abilityScore.desc}</p>
					: abilityScore?.desc?.map(paragraph => <p key={paragraph}>{paragraph}</p>)
				}
				{!!abilityScore?.skills?.length && 
					<div>
						<p>Skills</p>
						{abilityScore?.skills?.map(skill => <div key={skill.index}>
							<p>{skill.name}</p>
							{skill.desc && <p>{skill?.desc}</p>}
						</div>)}
					</div>
				}
			</div>)}
		</WikiLayout>
	);
}

export async function getStaticProps() {
	const { data } = await client.query<{ abilityScores: AbilityScoreShort[] }>({
		query: getAbilityScores,
	});
	return {
		props: {
			abilityScores: data.abilityScores,
		},
	};
}
