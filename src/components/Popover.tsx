import * as PopoverPrimitive from '@radix-ui/react-popover';
import { styled } from '../styles/stitches.config';
// import { styled } from "@stitches/react";

export const Popover = styled(PopoverPrimitive.Root, {
	backgroundColor: 'blue',
	padding: '24px'
});
export const PopoverTrigger = styled(PopoverPrimitive.Trigger, {
	backgroundColor: 'red',
	padding: '0'
});

// export const PopoverContent = PopoverPrimitive.Content;

export const PopoverContent = styled(PopoverPrimitive.Content, {
	backgroundColor: '#383a41',
	padding: '$1 $2',
	borderRadius: '6px'
});

export const PopoverListItem = styled('div', {
	borderBottom: 'solid 1px black',
	padding: '2px 4px'
});
