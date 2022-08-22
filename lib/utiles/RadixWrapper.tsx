// @ts-nocheck
import React from 'react';


export function radixWrapper<T>(Component: T, className: string): T {
	// eslint-disable-next-line react/display-name
	return React.forwardRef<
		React.ElementRef<typeof Component>,
		React.ComponentProps<typeof Component>
	>((props, forwardedRef) => {
		return <Component {...props} className={className} ref={forwardedRef} />;
	});
}
