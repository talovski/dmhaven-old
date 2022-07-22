import { Header } from '../../../components/Header';
import { styled } from '../../../styles/stitches.config';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/Popover';
import { Classes } from '../../../types/Classes';
import { Checkbox, CheckboxIndicator } from '../../../components/Checkbox';
import { useStore } from '@nanostores/react';
import { isClassSelected, filteredSpells, updateClasses } from './stores/spellsStore';

export const Spells = () => {
	const spells = useStore(filteredSpells);
	return (
		<Styles.Container>
			<Header size={'h3'}>Hi! I am spells</Header>
			<Styles.Table>
				<Styles.Header>
					<Styles.Cell>
						<Styles.NameCell>Name</Styles.NameCell>
					</Styles.Cell>
					<Styles.Cell>
						<Styles.LevelCell>Level</Styles.LevelCell>
					</Styles.Cell>
					<Styles.Cell>
						<Styles.ClassesCell>
							<Popover>
								<PopoverTrigger>Classes</PopoverTrigger>
								<PopoverContent>
									<p>Filter spells by class</p>
									{Classes.map(({ index, name }) => (
										<>
											<Checkbox
												value={index}
												checked={isClassSelected(index)}
												onCheckedChange={() => updateClasses(index)}
											>
												<CheckboxIndicator>
													{isClassSelected(index) ? 'YES' : 'NO'}
												</CheckboxIndicator>
											</Checkbox>
											<Link key={index} to={`wiki/classes/${index}`}>
												<p>{name}</p>
											</Link>
										</>
									))}
								</PopoverContent>
							</Popover>
						</Styles.ClassesCell>
					</Styles.Cell>
					<Styles.Cell>
						<Styles.ClassesCell>Subclasses</Styles.ClassesCell>
					</Styles.Cell>
				</Styles.Header>
				{spells?.length &&
					spells?.map((spell) => (
						<Styles.Row key={spell?.index}>
							<Styles.Cell>
								{spell.index && (
									<Link to={spell.index}>
										<Styles.NameCell>{spell?.name}</Styles.NameCell>
									</Link>
								)}
							</Styles.Cell>
							<Styles.Cell>
								<Styles.LevelCell>{spell?.level}</Styles.LevelCell>
							</Styles.Cell>
							<Styles.Cell>
								<Styles.ClassesCell>
									{spell?.classes?.map((characterClass) => (
										<Popover key={characterClass?.index}>
											<PopoverTrigger>{characterClass?.name}</PopoverTrigger>
											<PopoverContent>
												<p>Filter by class</p>
												<Link to={`/wiki/classes/${characterClass?.index}`}>
													<p>Go to class</p>
												</Link>
											</PopoverContent>
										</Popover>
									))}
								</Styles.ClassesCell>
							</Styles.Cell>
							<Styles.Cell>
								<Styles.ClassesCell>
									{spell?.subclasses?.map((subclass) => (
										<Popover key={subclass?.index}>
											<PopoverTrigger>{subclass?.name}</PopoverTrigger>
											<PopoverContent>
												<p>Filter by subclass</p>
												<Link to={`/wiki/subclasses/${subclass?.index}`}>
													<p>Go to subclass</p>
												</Link>
											</PopoverContent>
										</Popover>
									))}
								</Styles.ClassesCell>
							</Styles.Cell>
						</Styles.Row>
					))}
			</Styles.Table>
		</Styles.Container>
	);
};

const Styles = {
	Container: styled('div', {
		position: 'relative'
	}),
	Table: styled('div', {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		border: 'solid 1px black'
	}),
	Header: styled('div', {
		position: 'sticky',
		top: 0,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
		borderBottom: 'solid 1px black'
	}),
	Row: styled('div', {
		display: 'flex',
		width: '100%',
		borderBottom: 'solid 1px black'
	}),
	Cell: styled('div', {
		display: 'flex',
		padding: '8px',
		borderLeft: 'solid 1px black',

		'&:first-child': {
			borderLeft: 'none'
		}
	}),
	NameCell: styled('div', {
		minWidth: '250px',
		flex: 1,
		height: '100%'
	}),
	LevelCell: styled(`div`, {
		minWidth: '60px'
	}),
	ClassesCell: styled('div', {
		width: '250px',
		maxWidth: '250px',
		display: 'flex',
		gap: '8px',
		flexWrap: 'wrap',
		height: 'fit-content'
	})
};
