import WikiLayout from '../../../components/layouts/WikiLayout';
import { Column, Columns, Stack } from '../../../lib/primitives';
import { Text } from '../../../lib/primitives/Text/Text';
import { AlignmentShort } from '../../../types/alignments';
import client from '../../api/graphql';
import { getAlignments } from '../../api/queries/getAlignments';

type Props = {
	alignments: AlignmentShort[];
};

const Alignments = ({ alignments }: Props) => {
	return (
		<WikiLayout>
			<Text as="h1" size="h1" color="violet">
				Ability Scores
			</Text>
			<Stack gap="space1">
				{alignments.map((alignment) => (
					<Columns key={alignment.index}>
						<Column width="1/4">
							{alignment.name} ({alignment.abbreviation})
						</Column>
						<Column width="3/4">{alignment.desc}</Column>
					</Columns>
				))}
			</Stack>
			<div></div>
		</WikiLayout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query<{ alignments: AlignmentShort[] }>({
		query: getAlignments,
	});
	return {
		props: {
			alignments: data.alignments,
		},
	};
}

export default Alignments;
