import client from '../../api/graphql';
import { getSpells } from '../../api/queries/getSpells';
import { ShortSpellType } from '../../../types/spells';
import WikiLayout from '../../../components/layouts/WikiLayout';
import SpellsTable from '../../../components/wiki/spells-table/SpellsTable';

type Props = {
	spells: ShortSpellType[];
};

function Spells({ spells }: Props) {
	console.log('spells', spells);
	return (
		<WikiLayout>
			<div>
				<h1>Spells</h1>
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
