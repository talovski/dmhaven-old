import WikiLayout from '../../../components/layouts/WikiLayout';
import { Alignments } from '../../../types/alignments';
import client from '../../api/graphql';
import { getAlignments } from '../../api/queries/getAlignments';

type Props = {
	alignments: Alignments[];
};

const Alignments = ({ alignments }: Props) => {
	return (
		<WikiLayout>
			<div>Alignments</div>
			<div>
				{alignments.map((alignment) => (
					<div key={alignment.index}>
						<p>
							{alignment.abbreviation} — {alignment.name}
						</p>
						{typeof alignment.desc === 'object' 
              ? alignment?.desc?.map((paragraph) => (<p key={paragraph}>{paragraph}</p>))
              : <p>{alignment.desc}</p>
            }
					</div>
				))}
			</div>
		</WikiLayout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query<{ alignments: Alignments[] }>({
		query: getAlignments,
	});
	return {
		props: {
			alignments: data.alignments,
		},
	};
}

export default Alignments;
