import { ReactNode } from 'react';
import s from '../../styles/WikiLayout.module.css';
import { Categories } from '../../types/categories';
import Link from 'next/link';

const WikiLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<div className={s.sidebar}>
				{Categories.map((cat) => (
					<Link key={cat.index} href={`/wiki/${cat.index}`}>
						<a className={s.sidebarItem}>{cat.text}</a>
					</Link>
				))}
			</div>
			<div className={s.wikiContent}>{children}</div>
		</div>
	);
};

export default WikiLayout;
