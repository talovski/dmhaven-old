import '../styles/globals.css';
import styles from '../styles/Main.module.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { NextComponentType } from 'next';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);
	return (
		<div>
			<div className={styles.navbar}>
				<Link href="/">
					<a>DM Haven</a>
				</Link>
				<Link href="/wiki">
					<a>Wiki</a>
				</Link>
				<Link href={''}>
					<a>Profile</a>
				</Link>
			</div>
			{getLayout(<Component {...pageProps} />)}
		</div>
	);
};

export default MyApp;
