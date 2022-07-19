import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../api/api';
import { getSpell } from '../../api/queries/SPELL_QUERY';
import { GetSpellQuery } from '../../generated/graphql';

export const Spell = () => {
	const [spell, setSpell] = useState<GetSpellQuery>();
	const { index } = useParams();

	const variables = {
		index: { index }
	};

	useEffect(() => {
		const requestSpell = async () => {
			const res = await client.request<GetSpellQuery>({ document: getSpell, variables: variables });
			setSpell(res);
		};
		requestSpell();
	}, [index]);

	return <div>Hi! Im spell. My name is {spell?.spell?.name}</div>;
};
