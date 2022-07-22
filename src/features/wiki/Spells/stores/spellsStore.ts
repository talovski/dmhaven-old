import { action, atom, computed, onMount, task } from 'nanostores';
import client from '../../../../api/api';
import { getSpells } from '../../../../api/queries/SPELL_QUERY';
import { GetSpellsQuery } from '../../../../generated/graphql';

export const spells = atom<GetSpellsQuery>();
onMount(spells, () => {
	task(async () => {
		spells.set(await client.request(getSpells));
	});
});

export const selectedClasses = atom<string[]>([]);

export const updateClasses = action(
	selectedClasses,
	'updateClasses',
	(store, newOption: string) => {
		return store.get().includes(newOption)
			? store.set(store.get().filter((cl) => cl !== newOption))
			: store.set([...store.get(), newOption]);
	}
);

export const isClassSelected = action(
	selectedClasses,
	'isClassSelected',
	(store, newOption: string) => {
		return store.get()?.length ? store.get().includes(newOption) : false;
	}
);

export const filteredSpells = computed(
	[spells, selectedClasses],
	(spells: GetSpellsQuery, classes: string[]) => {
		return spells?.spells?.filter((spell) =>
			classes?.length
				? spell.classes?.some(
						(spellClass) => spellClass?.index && classes.includes(spellClass?.index)
				  )
				: spell
		);
	}
);
