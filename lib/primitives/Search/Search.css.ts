import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/default.css';

export const searchWrapper = recipe({
  base: {
    // boxShadow: vars.borders.bottom,
    transition: vars.transitions.default,
    backgroundColor: vars.colors.mauve3,
    width: vars.dimensions.full,
    paddingLeft: vars.space.space2,
    ':hover': {
      boxShadow: `inset 0px 0px 0px 1px ${vars.colors.gray8}, 0px 0px 0px 1px ${vars.colors.gray8}`,
    },
    ':focus-within': {
      boxShadow: `inset 0px 0px 0px 1px ${vars.colors.blue8}, 0px 0px 0px 1px ${vars.colors.blue8}`,
    },
    '::placeholder': {
      color: vars.colors.slate9
    },
    ':disabled': {
        pointerEvents: 'none',
        backgroundColor: vars.colors.slate2,
        color: vars.colors.slate8,
        cursor: 'not-allowed',
    }
  },
  variants: {
    size: {
      '1': {
        borderRadius: vars.radii[1],
        height: vars.space.space4,
        fontSize: vars.fontSize[3],
        paddingTop: vars.space.space1,
        paddingBottom: vars.space.space1,
        '&:-webkit-autofill::first-line': {
          fontSize: vars.fontSize[2],
        },
      },
      '2': {
        borderRadius: vars.radii[2],
        height: vars.space.space5,
        fontSize: vars.fontSize[4],
        paddingTop: vars.space.space2,
        paddingBottom: vars.space.space2,
        '&:-webkit-autofill::first-line': {
          fontSize: vars.fontSize[4],
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        ':hover': {
            boxShadow: `inset 0 0 0 1px ${vars.colors.slateA7}`,
          },
        
        ':focus': {
          backgroundColor: vars.colors.mauve2,
          boxShadow: `inset 0px 0px 0px 1px ${vars.colors.blue8}, 0px 0px 0px 1px ${vars.colors.blue8}`,
        },
        ':disabled': {
          backgroundColor: 'transparent',
        },
        ':read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: `inset 0 0 0 1px ${vars.colors.red7}`,
        ':focus': {
          boxShadow: `inset 0px 0px 0px 1px ${vars.colors.red8}, 0px 0px 0px 1px ${vars.colors.red8}`,
        },
      },
      valid: {
        boxShadow: `inset 0 0 0 1px ${vars.colors.green7}`,
        ':focus': {
          boxShadow: `inset 0px 0px 0px 1px ${vars.colors.green8}, 0px 0px 0px 1px ${vars.colors.green8}`,
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        ':focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
})

export const search = style({
  all: 'unset',
  width: vars.dimensions.full
  // fontSize: vars.fontSize[4],
})
