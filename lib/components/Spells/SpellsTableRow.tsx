import { Link } from '../../primitives/Link/Link';
import { ShortSpellType } from '../../../types/spells';
import { ApiReference } from '../../../types/api-reference';
import { Flex, Popover } from '../../primitives';
import { tableCell, tableRow } from './SpellsTable.css';
import { Badge } from '../../primitives/Badge/Badge';

const SpellsTableRowPopover = ({
	spellClass,
	type,
}: {
	spellClass: ApiReference;
	type: 'class' | 'subclass';
}) => (
	<Popover.Root>
		<Popover.Trigger>
			<Badge size="small" color="violet" cursor="pointer">
				{spellClass.name}
			</Badge>
		</Popover.Trigger>
		<Popover.Content>
			<Link href={`/wiki/${type === 'class' ? 'classes' : 'subclasses'}/${spellClass.index}`}>
				Go to {type}
			</Link>
			<p>Add {type} to filters</p>
		</Popover.Content>
	</Popover.Root>
);

export const SpellsTableRow = ({ spell }: { spell: ShortSpellType }) => (
	<tr className={tableRow}>
		<td className={tableCell()}>
			<Link href={'spells/' + spell.index} size="small">{spell.name}</Link>
		</td>
		<td className={tableCell()}>
			<Flex space='space1'>
				{spell.classes.map((spellClass) => (
					<SpellsTableRowPopover key={spellClass.index} spellClass={spellClass} type="class" />
				))}
			</Flex>
		</td>
		<td className={tableCell({ align: 'start' })}>
			<div>
				{spell.subclasses.map((spellClass) => (
					<SpellsTableRowPopover key={spellClass.index} spellClass={spellClass} type="subclass" />
				))}
			</div>
		</td>
	</tr>
);
