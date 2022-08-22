import WikiLayout from '../../../components/layouts/WikiLayout';
import { SpellsTable } from '../../../lib/components/Spells/SpellsTable';
import { Text } from '../../../lib/primitives/Text/Text';
import { ShortSpellType } from '../../../types/spells';
import client from '../../api/graphql';
import { getSpells } from '../../api/queries/getSpells';

type Props = {
	spells: ShortSpellType[];
};

function Spells({ spells }: Props) {
	console.log('spells', spells);
	return (
		<WikiLayout>
			<div>
				<Text as="h1" size="h1" color="pink" gradient>
					Spells
				</Text>
				<SpellsTable spells={spells} />
			</div>
		</WikiLayout>
	);
}

export async function getStaticProps() {
	const { data } = await client.query<{ spells: ShortSpellType }>({
		query: getSpells,
	});
	return {
		props: {
			spells: data.spells,
		},
	};
}

export default Spells;
