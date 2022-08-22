import { characterClasses } from '../../../types/character-classes';
import { Column, Flex } from '../../primitives';
import { Checkbox } from '../../primitives/Checkbox/Checkbox';
import { Popover } from '../../primitives/Popover/Popover';
import { tableCell, tableHead, tableHeadCell } from './SpellsTable.css';

type TableHeaderProps = {
	selectedClasses: string[];
	updateClasses: (index: string) => void;
	isClassSelected: (index: string) => boolean;
};
export const SpellsTableHeader = ({
	selectedClasses,
	updateClasses,
	isClassSelected,
}: TableHeaderProps) => {
	const disabledClasses = ['barbarian', 'rogue', 'monk', 'fighter'];

	return (
		<thead className={tableHead}>
			<tr className={tableCell({ align: 'start', border: 'solid' })}>
				<th className={tableHeadCell({ align: 'start' })}>Name</th>
				<td className={tableHeadCell({ align: 'start' })}>Level</td>
				<td className={tableHeadCell({ align: 'start' })}>
					<Popover.Root>
						<Popover.Trigger>
							Classes {selectedClasses?.length > 0 && `— ${selectedClasses.length} selected`}
						</Popover.Trigger>
						<Popover.Content width="space11">
							<Column>
								{characterClasses.map((characterClass) => (
									<Flex key={characterClass.index} space="space10">
										<Checkbox
											value={characterClass.index}
											checked={isClassSelected(characterClass.index)}
											onChange={() => updateClasses(characterClass.index)}
											size={'small'}
											disabled={disabledClasses.includes(characterClass.index)}
											labelText={characterClass.name}
										/>
									</Flex>
								))}
							</Column>
						</Popover.Content>
					</Popover.Root>
				</td>
				<td className={tableHeadCell({ align: 'start' })}>Subclasses</td>
			</tr>
		</thead>
	);
};
