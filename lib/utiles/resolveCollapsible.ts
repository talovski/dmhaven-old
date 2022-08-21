import { Children, ReactNode } from 'react';
import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../../styles/atoms.css';
import { Align, alignToFlexAlign, alignYToFlexAlign, AlignY } from './align';


type ResponsiveArray<Value extends string | number> =
  ReadonlyArray<Value | null> & { length: 2 | 3 | 4 } & { 0: Value | null };


export const optimizeResponsiveArray = <Value extends string | number>(
  value: ResponsiveArray<Value>,
): ResponsiveArray<Value> => {
  let lastValue: Value | undefined;

  const values = value.map((v) => {
    if (v !== lastValue && v !== null) {
      lastValue = v;
      return v;
    }

    return null;
  });

  return [
    values[0] ?? null,
    values[1] ?? null,
    values[2] ?? null,
    values[3] ?? null,
  ] as const;
};

function invertAlignment<Alignment extends string>(alignment: Alignment) {
  if (alignment === 'flexStart') {
    return 'flexEnd';
  }

  if (alignment === 'flexEnd') {
    return 'flexStart';
  }

  return alignment;
}

import { Breakpoint, breakpointNames } from '../../styles/breakpoints';

export interface ResponsiveRangeProps {
  above?: Exclude<Breakpoint, 'wide'>;
  below?: Exclude<Breakpoint, 'mobile'>;
}

export const resolveResponsiveRangeProps = (
  props: ResponsiveRangeProps,
): [boolean, boolean, boolean, boolean] => {
  const { above, below } = props;

  if (!above && !below) {
    return [false, false, false, false];
  }

  const startIndex = above ? breakpointNames.indexOf(above) + 1 : 0;
  const endIndex = below
    ? breakpointNames.indexOf(below) - 1
    : breakpointNames.length - 1;
  const range = breakpointNames.slice(startIndex, endIndex + 1);

  const includeMobile = range.indexOf('mobile') >= 0;
  const includeTablet = range.indexOf('tablet') >= 0;
  const includeDesktop = range.indexOf('desktop') >= 0;
  const includeWide = range.indexOf('wide') >= 0;

  return [includeMobile, includeTablet, includeDesktop, includeWide];
};

export interface CollapsibleAlignmentProps {
  collapseBelow?: ResponsiveRangeProps['below'];
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
  reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
  align,
  alignY,
  collapseBelow,
  reverse,
}: CollapsibleAlignmentProps) {
  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const rowReverseWide =
    (collapseMobile || collapseTablet || collapseDesktop) && reverse;

  const normalizedAlign = normalizeResponsiveValue(
    alignToFlexAlign(align) || 'flexStart',
  );
  const {
    mobile: justifyContentMobile = 'flexStart',
    tablet: justifyContentTablet = justifyContentMobile,
    desktop: justifyContentDesktop = justifyContentTablet,
    wide: justifyContentWide = justifyContentDesktop,
  } = normalizedAlign;

  return {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    orderChildren: (children: ReactNode) => {
      const childrenArray = Children.toArray(children);
      return !collapseMobile && !collapseTablet && reverse
        ? childrenArray.reverse()
        : childrenArray;
    },
    collapsibleAlignmentProps: {
      display: optimizeResponsiveArray([
        collapseMobile ? 'block' : 'flex',
        collapseTablet ? 'block' : 'flex',
        collapseDesktop ? 'block' : 'flex',
        'flex',
      ]),
      flexDirection: optimizeResponsiveArray([
        collapseMobile ? 'column' : 'row',
        // eslint-disable-next-line no-nested-ternary
        collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
        // eslint-disable-next-line no-nested-ternary
        collapseDesktop ? 'column' : rowReverseDesktop ? 'rowReverse' : 'row',
        rowReverseWide ? 'rowReverse' : 'row',
      ]),
      justifyContent: align
        ? optimizeResponsiveArray([
            justifyContentMobile,
            rowReverseTablet
              ? invertAlignment(justifyContentTablet)
              : justifyContentTablet,
            rowReverseDesktop
              ? invertAlignment(justifyContentDesktop)
              : justifyContentDesktop,
            rowReverseWide
              ? invertAlignment(justifyContentWide)
              : justifyContentWide,
          ])
        : undefined,
      alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
    },
    collapsibleAlignmentChildProps: {
      display: optimizeResponsiveArray([
        collapseMobile && justifyContentMobile !== 'flexStart'
          ? 'flex'
          : 'block',
        collapseTablet && justifyContentTablet !== 'flexStart'
          ? 'flex'
          : 'block',
        collapseDesktop && justifyContentDesktop !== 'flexStart'
          ? 'flex'
          : 'block',
        'block',
      ]),
      justifyContent: optimizeResponsiveArray([
        justifyContentMobile,
        justifyContentTablet,
        justifyContentDesktop,
        justifyContentWide,
      ]),
    },
  } as const;
}