import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ReactNode } from 'react';
import { Atoms } from '../../../styles/atoms.css';
import { vars } from '../../../styles/default.css';
import { popoverArrow, popoverContent } from './Popover.css';

type RootProps = {
	defaultOpen?: boolean;
	modal?: boolean;
	children: ReactNode;
};

const Root = ({ defaultOpen = false, modal = false, children }: RootProps) => {
	return (
		<PopoverPrimitive.Root defaultOpen={defaultOpen} modal={modal}>
			{children}
		</PopoverPrimitive.Root>
	);
};

const Trigger = ({ children, className }: { children: ReactNode; className?: string }) => {
	return <PopoverPrimitive.Trigger className={className}>{children}</PopoverPrimitive.Trigger>;
};

const Content = ({ children }: { children: ReactNode; width?: Atoms['width'] }) => {
	return (
		<PopoverPrimitive.Content sideOffset={4} align="start" className={popoverContent}>
			<PopoverPrimitive.Arrow color={vars.colors.mauve2} className={popoverArrow} />
			{children}
		</PopoverPrimitive.Content>
	);
};

export const Popover = {
	Root: Root,
	Trigger: Trigger,
	Content: Content,
};
