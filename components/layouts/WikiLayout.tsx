import { ReactNode } from 'react';
import { Categories } from '../../types/categories';
import { Stack } from '../../lib/primitives/Stack';
import { Link } from '../../lib/primitives/Link/Link';
import { Box } from '../../lib/primitives';
import { useRouter } from 'next/router';

const WikiLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	return (
		<Box
			display={{ mobile: 'block', tablet: 'flex' }}
			marginTop={{ tablet: 'space6' }}
			marginBottom={{ tablet: 'space8' }}
			position="relative"
		>
			<Box
				as="nav"
				position={{ mobile: 'relative', tablet: 'fixed' }}
				flexBasis={{ mobile: '1', tablet: '1/4' }}
				overflowY="scroll"
				height={{ tablet: 'full' }}
				marginBottom={{ tablet: 'space11'}}
				paddingBottom="space8"
			>
				<Stack gap="space2" padding="space2" align="start">
					{Categories.map((cat) => (
						<Link
							key={cat.index}
							size="small"
							accented={true}
							href={`/wiki/${cat.index}`}
							isActive={router.pathname.includes(cat.index)}
						>
							{cat.text}
						</Link>
					))}
				</Stack>
			</Box>
			<Box
				as="main"
				marginLeft={{ mobile: 'auto', tablet: 'percent20' }}
				flexBasis="1/2"
				flexWrap={{ mobile: 'wrap', tablet: 'nowrap' }}
			>
				{children}
			</Box>
		</Box>
	);
};

export default WikiLayout;
