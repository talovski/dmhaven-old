import { Header } from '../../components/Header';
import client from '../../api/api';
import { getSpells } from '../../api/queries/SPELL_QUERY';
import { useEffect, useState } from 'react';
import { GetSpellsQuery } from '../../generated/graphql';
import { styled } from '../../styles/stitches.config';
import { Label } from '../../components/Label';
import { Link } from 'react-router-dom';
import { Popover, PopoverTrigger } from '../../components/Popover';
import { PopoverContent } from '@radix-ui/react-popover';

export const Spells = () => {
	const [spells, setSpells] = useState<GetSpellsQuery>();
	useEffect(() => {
		const requestSpells = async () => {
			const res = await client.request<GetSpellsQuery>(getSpells);
			setSpells(res);
			console.log('res', res);
		};
		requestSpells();
	}, []);

	return (
		<S.Container>
			<Header size={'h3'}>Hi! I am spells</Header>
			<S.Table>
				<S.Header>
					<S.Cell>
						<S.NameCell>Name</S.NameCell>
					</S.Cell>
					<S.Cell>
						<S.ClassesCell>
							<p>Classes</p>
						</S.ClassesCell>
					</S.Cell>
					<S.Cell>
						<S.ClassesCell>
							<p>Subclasses</p>
						</S.ClassesCell>
					</S.Cell>
				</S.Header>
				{spells?.spells.map((spell) => (
					<>
						{spell.classes?.map((characterClass) => (
							<S.Row key={characterClass?.index}>
								<S.Cell>
									<Link to={spell.index}>
										<S.NameCell>{spell?.name}</S.NameCell>
									</Link>
								</S.Cell>
								<S.Cell>
									<S.ClassesCell>
										{spell?.classes?.map((characterClass) => (
											<Popover key={characterClass?.index}>
												<PopoverTrigger key={characterClass?.index}>
													{characterClass?.name}
												</PopoverTrigger>
												<PopoverContent>
													<p>Filter by class</p>
													<Link to={`/wiki/classes/${characterClass?.index}`}>
														<p>Go to class</p>
													</Link>
												</PopoverContent>
											</Popover>
										))}
									</S.ClassesCell>
								</S.Cell>
								<S.Cell>
									<S.ClassesCell>
										{spell?.subclasses?.map((characterClass) => (
											<>
												<Label color={'violet'} key={characterClass?.index}>
													{characterClass?.name}
												</Label>
											</>
										))}
									</S.ClassesCell>
								</S.Cell>
							</S.Row>
						))}
					</>
				))}
			</S.Table>
		</S.Container>
	);
};

const S = {
	Container: styled('div', {
		position: 'relative'
	}),
	Table: styled('div', {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		paddingTop: '4rem'
	}),
	Header: styled('div', {
		position: 'fixed',
		top: 0,
		display: 'flex',
		alignItems: 'center',
		paddingTop: '4rem'
	}),
	Row: styled('div', {
		display: 'flex',
		width: '100%',
		borderBottom: 'solid 2px black'
	}),
	Cell: styled('div', {
		display: 'flex',
		padding: '8px',
		borderLeft: 'solid 2px black'
	}),
	NameCell: styled('div', {
		minWidth: '250px',
		flex: 1,
		height: '100%'
	}),
	ClassesCell: styled('div', {
		width: '250px',
		maxWidth: '250px',
		display: 'flex',
		gap: '8px',
		alignItems: 'center',
		flexWrap: 'wrap'
	})
};
