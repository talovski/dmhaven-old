import WikiLayout from "../../../components/layouts/WikiLayout"
import { Skills } from "../../../types/skills"
import client from "../../api/graphql"
import { getSkills } from "../../api/queries/getSkills"

type Props = {
  skills: Skills[]
}
const Skills = ({ skills }: Props) => {
  return(
    <WikiLayout>
      <div>
        {skills.map(skill => 
          <div key={skill.index}>
            <h3>{skill.name}</h3>
            <div>
              <p>Desc</p>
              {!!skill?.desc?.length && skill.desc.map(parapgraph => <p key={parapgraph}>{parapgraph}</p>)}
            </div>
            <div>{skill.ability_score.name} — {skill.ability_score.full_name}</div>
          </div>
        )}
      </div>
    </WikiLayout>
  )
}

export async function getStaticProps() {
	const { data } = await client.query<{ skills: Skills[] }>({
		query: getSkills,
	});
	return {
		props: {
			skills: data.skills,
		},
	};
}

export default Skills;