import WikiLayout from '../../../components/layouts/WikiLayout';
import client from '../../api/graphql';
import { ShortSpellType, SpellType } from '../../../types/spells';
import { getSpell } from '../../api/queries/getSpell';
import { getSpells } from '../../api/queries/getSpells';

type Props = {
	spell: SpellType;
};

const Spell = ({ spell }: Props) => {
	return (
		<WikiLayout>
			<h1>Hi! I am spell {spell.index}</h1>
		</WikiLayout>
	);
};

export async function getStaticPaths() {
	const { data } = await client.query<{ spells: ShortSpellType[] }>({
		query: getSpells,
	});
	const spells = data.spells;

	const paths = spells.map((spell: { index: string }) => ({
		params: { spell: spell.index },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: string }) {
	const { data } = await client.query<{ spell: SpellType }>({
		query: getSpell,
		variables: { params },
	});
	const spell = data.spell;

	return { props: { spell } };
}

export default Spell;
