import { useEffect, useState } from 'react';
import client from '../../api/api';
import { getClasses } from '../../api/queries/classesQueries';
import { ClassesQuery } from '../../generated/graphql';

export const PlayerClasses = () => {
	const [playerClasses, setPlayerClasses] = useState<ClassesQuery>();

	useEffect(() => {
		console.log('hi');
		const reqClasses = async () => {
			const res = await client.request<ClassesQuery>(getClasses);
			setPlayerClasses(res);
		};
		reqClasses();
	}, []);

	return (
		<div>
			<h1>
				Classes:{' '}
				{playerClasses?.classes.map((playerClass) => (
					<p key={playerClass?.index}>{playerClass?.name}</p>
				))}
			</h1>
		</div>
	);
};
