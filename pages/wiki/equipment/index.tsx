import WikiLayout from '../../../components/layouts/WikiLayout';
import { EquipmentsShort } from '../../../types/equipments';
import client from '../../api/graphql';
import { getEquipments } from '../../api/queries/getEquipments';

type Props = {
	equipments: EquipmentsShort[];
};

function Equipments({ equipments }: Props) {
	console.log('equipments', equipments);
	return (
		<WikiLayout>
			<div>
				<h1>Equipments</h1>
				{equipments?.map((equipment) => (
					<div key={equipment.index}>
						<p>{equipment.name}</p>
						<p>Category:</p>
						{equipment.equipment_category.name}
						<p>Description:</p>
						{equipment?.desc?.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
						<p>Cost:</p>
						<p>
							{equipment.cost?.unit} — {equipment.cost?.quantity}
						</p>
					</div>
				))}
			</div>
		</WikiLayout>
	);
}

export async function getStaticProps() {
	const { data } = await client.query<{ equipments: EquipmentsShort[] }>({
		query: getEquipments,
	});
	return {
		props: {
			equipments: data.equipments,
		},
	};
}

export default Equipments;
