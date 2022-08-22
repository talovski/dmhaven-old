import WikiLayout from '../../../components/layouts/WikiLayout';
import { Box, Column, Columns, Stack } from '../../../lib/primitives';
import { Link } from '../../../lib/primitives/Link/Link';
import { Text } from '../../../lib/primitives/Text/Text';
import { spellLine } from '../../../styles/abilityScores.css';
import { AbilityScoreShort } from '../../../types/ability-scores';
import client from '../../api/graphql';
import { getAbilityScores } from '../../api/queries/getAbilityScores';

type Props = { abilityScores: AbilityScoreShort[] };

export default function AbilityScores({ abilityScores }: Props) {
	return (
		<WikiLayout>
			<Text as="h1" size="h1" color="violet">
				Ability Scores
			</Text>

			<Box paddingTop="space6">
				<Stack gap="space5">
					{abilityScores.map((abilityScore) => (
						<Box key={abilityScore.index} id={abilityScore.index}>
							<Text as="h2" size="h2" color="default">
								{abilityScore.full_name} ({abilityScore.name})
							</Text>

							{typeof abilityScore.desc === 'string' ? (
								<Text>{abilityScore.desc}</Text>
							) : (
								abilityScore?.desc?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
							)}
							{!!abilityScore?.skills?.length && (
								<Box paddingTop="space3">
									<Text as="h3" size="h3">
										Skills
									</Text>
									<Stack>
										{abilityScore?.skills?.map((skill) => (
											<Box key={skill.index} customClassName={spellLine} paddingY="space1">
												<Columns
													id={skill.index}
													key={skill.index}
													collapseBelow="tablet"
													space={{ desktop: 'space3', tablet: 'space1' }}
												>
													<Column width="1/8">
														<Link href={`/wiki/skills#${skill.index}`} size="small">
															{skill.name}
														</Link>
													</Column>
													<Column width="7/8">
														{skill.desc && <Text size="p2">{skill?.desc}</Text>}
													</Column>
												</Columns>
											</Box>
										))}
									</Stack>
								</Box>
							)}
						</Box>
					))}
				</Stack>
			</Box>
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
