import { IconSearch } from '../../Icons';
import { Flex } from '../Flex';
import { search, searchWrapper } from './Search.css';

type SearchProps = {
	searchQuery: string;
	placeholder?: string;
	setSearchQuery: (event: any) => void;
};

export const Search = ({ searchQuery, setSearchQuery, placeholder }: SearchProps) => {
	return (
		<Flex space={'space2'} collapseBelow={100} wrap={'nowrap'} externalClassName={searchWrapper({ cursor: 'default', size: '1' })}>
			<IconSearch />
			<input
				className={search}
				placeholder={placeholder}
				value={searchQuery}
				onChange={(event) => setSearchQuery(event.target.value)}
			/>
		</Flex>
	);
};
