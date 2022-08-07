import { ShortSpellType } from '../../../types/spells';
import styles from './SpellsTable.module.css';
import Link from 'next/link';
import { characterClasses } from '../../../types/character-classes';
import {
	PopoverArrow,
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from '../../primitives/popover/Popover';
import { useState } from 'react';
import Search from '../../primitives/search/Search';
import { ApiReference } from '../../../types/api-reference';

type Props = {
	spells: ShortSpellType[];
};

function SpellsTableHeader({
	selectedClasses,
	updateClasses,
	isClassSelected,
}: {
	selectedClasses: string[];
	updateClasses: (index: string) => void;
	isClassSelected: (index: string) => boolean;
}) {
	return (
		<thead>
			<tr>
				<td className={styles.cell}>Name</td>
				<td className={styles.classesCell}>
					<PopoverRoot>
						<PopoverTrigger>
							Classes{' '}
							{selectedClasses?.length > 0 &&
								`— ${selectedClasses.length} selected`}
						</PopoverTrigger>
						<PopoverContent align="start">
							<PopoverArrow></PopoverArrow>

							{characterClasses.map((characterClass) => (
								<div key={characterClass.index}>
									<input
										type={'checkbox'}
										id={characterClass.index}
										onChange={() => updateClasses(characterClass.index)}
										value={characterClass.index}
										disabled={
											characterClass.index === 'barbarian' ||
											characterClass.index === 'rogue' ||
											characterClass.index === 'monk' ||
											characterClass.index === 'fighter'
										}
										checked={isClassSelected(characterClass.index)}
									/>
									<label htmlFor={characterClass.index}>
										{characterClass.name}
									</label>
								</div>
							))}
						</PopoverContent>
					</PopoverRoot>
				</td>
				<td className={styles.classesCell}>Subclasses</td>
			</tr>
		</thead>
	);
}

function SpellsTableClassPopover({
	spellClass,
	type,
}: {
	spellClass: ApiReference;
	type: 'class' | 'subclass';
}) {
	return (
		<PopoverRoot key={spellClass.index}>
			<PopoverTrigger>{spellClass.name}</PopoverTrigger>
			<PopoverContent align="start">
				<PopoverArrow></PopoverArrow>
				<p>
					<Link
						href={`/wiki/${type === 'class' ? 'classes' : 'subclasses'}/${
							spellClass.index
						}`}
					>
						Go to {type}
					</Link>
				</p>
				<p>Add {type} to filters</p>
			</PopoverContent>
		</PopoverRoot>
	);
}

function SpellsTableRow({ spell }: { spell: ShortSpellType }) {
	return (
		<tr key={spell.index}>
			<td className={styles.cell}>
				<Link href={'spells/' + spell.index}>
					<a>{spell.name}</a>
				</Link>
			</td>
			<td className={styles.classesCell}>
				{spell.classes.map((spellClass) => (
					<SpellsTableClassPopover
						key={spellClass.index}
						spellClass={spellClass}
						type={'class'}
					/>
				))}
			</td>
			<td className={styles.classesCell}>
				{spell.subclasses.map((spellClass) => (
					<SpellsTableClassPopover
						key={spellClass.index}
						spellClass={spellClass}
						type={'subclass'}
					/>
				))}
			</td>
		</tr>
	);
}

function SpellsTable({ spells }: Props) {
	const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState('');

	const isClassSelected = (characterClass: string) =>
		selectedClasses.includes(characterClass);

	const updateClasses = (newClass: string) => {
		return selectedClasses.includes(newClass)
			? setSelectedClasses(
					selectedClasses.filter((currentClass) => currentClass !== newClass)
			  )
			: setSelectedClasses([...selectedClasses, newClass]);
	};

	const filteredSpells = spells
		.filter((spell) =>
			selectedClasses?.length
				? spell.classes.some((spellClass) =>
						selectedClasses.includes(spellClass.index)
				  )
				: spell
		)
		.filter((spell) =>
			searchQuery?.length
				? spell.name.toLowerCase().includes(searchQuery.toLowerCase())
				: spell
		);

	return (
		<>
			<div>
				<Search
					id={'search'}
					name={'search'}
					hasLabel={true}
					label={'Search for spell by name'}
					value={searchQuery}
					onChange={(event) => setSearchQuery(event.target.value)}
				/>
			</div>
			<table className={styles.table}>
				<SpellsTableHeader
					selectedClasses={selectedClasses}
					updateClasses={updateClasses}
					isClassSelected={isClassSelected}
				/>
				<tbody>
					{filteredSpells.map((spell) => (
						<SpellsTableRow key={spell.index} spell={spell} />
					))}
				</tbody>
			</table>
		</>
	);
}

export default SpellsTable;
