import WikiLayout from '../../../components/layouts/WikiLayout';
import { Link } from '../../../lib/primitives/Link/Link';
import { SkillShort } from '../../../types/skills';
import client from '../../api/graphql';
import { getSkills } from '../../api/queries/getSkills';

type Props = {
	skills: SkillShort[];
};
const Skills = ({ skills }: Props) => {
	return (
		<WikiLayout>
			<div>
				{skills.map((skill) => (
					<div id={skill.index} key={skill.index}>
						<h3>{skill.name}</h3>
						<div>
							<p>Desc</p>
							{!!skill?.desc?.length &&
								skill.desc.map((parapgraph) => <p key={parapgraph}>{parapgraph}</p>)}
						</div>
						<div>
							<Link href={`/wiki/ability-scores#${skill.ability_score.index}`}>
								{skill.ability_score.name} — {skill.ability_score.full_name}
							</Link>
						</div>
					</div>
				))}
			</div>
		</WikiLayout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query<{ skills: SkillShort[] }>({
		query: getSkills,
	});
	return {
		props: {
			skills: data.skills,
		},
	};
}

export default Skills;
