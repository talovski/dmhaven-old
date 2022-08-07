import * as PopoverPrimitive from '@radix-ui/react-popover';
import styled from 'astroturf/react';
import { radixWrapper } from '../../../lib/RadixWrapper';
import styles from './Popover.module.css';

export const PopoverRoot = PopoverPrimitive.Root;
export const PopoverArrow = PopoverPrimitive.PopoverArrow;

export const PopoverContentContent = radixWrapper<
	typeof PopoverPrimitive.PopoverContent
>(PopoverPrimitive.PopoverContent, styles.popoverContent);
PopoverContentContent.displayName = 'PopoverContentContent';

export const PopoverTriggerTrigger = radixWrapper<
	typeof PopoverPrimitive.PopoverTrigger
>(PopoverPrimitive.PopoverTrigger, styles.popoverTrigger);

export const PopoverTrigger = styled(PopoverPrimitive.PopoverTrigger)`
	&[data-state='open'] {
		background-color: var(--color-beige-light);
	}
`;

export const PopoverContent = styled(PopoverPrimitive.PopoverContent)`
	padding: 8px 16px;
	background-color: var(--color-purple-500);
	border-radius: 4px;
	color: var(--color-beige-light);
`;
