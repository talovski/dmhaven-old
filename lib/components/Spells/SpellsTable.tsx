import { useState } from 'react';
import { ShortSpellType } from '../../../types/spells';
import { Box, Column, Columns, Search } from '../../primitives';
import { search, table, tableBody } from './SpellsTable.css';
import { SpellsTableHeader } from './SpellsTableHeader';
import { SpellsTableRow } from './SpellsTableRow';

export const SpellsTable = ({ spells }: { spells: ShortSpellType[] }) => {
	const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState('');

	const isClassSelected = (characterClass: string) => selectedClasses.includes(characterClass);

	const updateSelectedClasses = (newClass: string) => {
		return selectedClasses.includes(newClass)
			? setSelectedClasses(selectedClasses.filter((currentClass) => currentClass !== newClass))
			: setSelectedClasses([...selectedClasses, newClass]);
	};

	const filteredSpells = spells
		.filter((spell) =>
			selectedClasses?.length
				? spell.classes.some((spellClass) => selectedClasses.includes(spellClass.index))
				: spell
		)
		.filter((spell) => {
			if (searchQuery?.length) {
				return (
					spell.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					spell.classes.some((spellClass) =>
						spellClass.name.toLowerCase().includes(searchQuery.toLowerCase())
					)
				);
			} else {
				return spell;
			}
			// searchQuery?.length ? spell.name.toLowerCase().includes(searchQuery.toLowerCase()) : spell
		});

	return (
		<Box>
			<Box position="sticky" top={0} paddingY="space3" customClassName={search}>
				<Columns space="space4" collapseBelow={600} alignY="center">
					<Column width={'1/4'}>
						<label htmlFor="search">Search by spell name</label>
					</Column>
					<Column width={'1/2'}>
						<Search
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
							placeholder="Search spells by name and class"
						/>
					</Column>
				</Columns>
			</Box>
			<table className={table}>
				<SpellsTableHeader
					selectedClasses={selectedClasses}
					isClassSelected={isClassSelected}
					updateClasses={updateSelectedClasses}
				/>
				<tbody className={tableBody}>
					{filteredSpells.map((spell) => (
						<SpellsTableRow key={spell.index} spell={spell} />
					))}
				</tbody>
			</table>
		</Box>
	);
};
