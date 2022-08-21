import '../styles/global.css';

import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { useState } from 'react';

import { Box } from '../lib/primitives/Box/Box';
import { Flex } from '../lib/primitives/Flex';
import { Link } from '../lib/primitives/Link/Link';
import { darkThemeClass, lightThemeClass } from '../styles/default.css';
import classNames from 'classnames';
import { main } from '../styles/global.css';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	// const getLayout = Component.getLayout || ((page: ReactNode) => page);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	return (
		<Box
		as="main"
		position="relative"
		width="full"
		padding='space3'
		customClassName={classNames([isDarkTheme ? darkThemeClass : lightThemeClass], main)}
		>
			<Box position="fixed" zIndex="sticky">
				<Flex space="space2">
					<Link href="/">DM Haven</Link>
					<Link href="/wiki">Wiki</Link>
					<Link href={''}> Profile</Link>
				</Flex>
				<button onClick={() => setIsDarkTheme(!isDarkTheme)}>Change theme</button>
			</Box>
			<Box paddingTop="space4"><Component {...pageProps} /></Box>
		</Box>
			);
		};

export default MyApp;
