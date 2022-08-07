import styles from './Search.module.css';

type Props = {
	theme?: 'dark' | 'light';
	id: string;
	name: string;
	hasLabel: boolean;
	label: string;
	value: string;
	onChange: (event: any) => void;
};

const Search = ({
	id,
	name,
	hasLabel,
	label,
	value,
	onChange,
	theme = 'dark',
}: Props) => {
	return (
		<div className={styles.container}>
			{hasLabel && (
				<label className={`${styles.searchLabel}_${theme}`} htmlFor={id}>
					{label}
				</label>
			)}
			<input
				className={`${styles.search} ${styles.search}_${theme}`}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
			/>{' '}
		</div>
	);
};

export default Search;
