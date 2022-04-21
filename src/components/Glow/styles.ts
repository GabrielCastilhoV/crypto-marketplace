import type * as Stitches from '@stitches/react'
import { styled } from 'styles/stitches.config'

export type GlowVariants = Stitches.VariantProps<typeof Wrapper>

export const Wrapper = styled('div', {
  position: 'absolute',
  zIndex: '-1',
  br: '$full',
  w: '120px',
  h: '120px',
  filter: 'blur(100px)',

  variants: {
    color: {
      purple: {
        bg: '$purple400'
      },
      pink: {
        bg: '$pink100'
      },
      blue: {
        w: '120px',
        h: '120px',
        bg: 'linear-gradient(135deg, $purple400 0%, $navy_blue100 100%)'
      }
    },
    position: {
      top: {
        top: 0,
        right: 0,

        '@lg': {
          right: '100%'
        }
      },
      bottom: {
        bottom: 0,
        right: '100%',

        '@lg': {
          right: 0
        }
      }
    }
  },

  defaultVariants: {
    color: 'pink'
  }
})
