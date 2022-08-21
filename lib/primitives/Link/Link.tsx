import NextLink from 'next/link';
import { forwardRef, ReactNode } from 'react';

import { textLink } from './Link.css';

type LinkProps = {
	children: ReactNode;
	color?: 'contrast' | 'blue' | 'subtle';
	size?: 'small' | 'medium' | 'large';
	href: string;
	isActive?: boolean;
	className?: string;
	accented?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{ href, children, color = 'contrast', size = 'medium', accented = false, isActive },
		ref
	) => {
		return (
			<NextLink passHref href={href} ref={ref}>
				<a
					className={textLink({
						color: color,
						size: size,
						accented: accented,
						active: isActive,
						padding: true,
					})}
				>
					{children}
				</a>
			</NextLink>
		);
	}
);

Link.displayName = 'Link';
