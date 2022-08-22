export const breakpointNames = ['mobile', 'tablet', 'desktop', 'wide'] as const;

export enum BreakpointsEnum {
	mobile = 0,
	tablet = 740,
	desktop = 992,
	wide = 1200,
}

export const breakpoints = {
	mobile: 0,
	tablet: 740,
	desktop: 992,
	wide: 1200,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export type Breakpoints = {
	mobile: 0;
	tablet: 740;
	desktop: 992;
	wide: 1200;
};
