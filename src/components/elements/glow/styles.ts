import { styled, VariantProps } from 'styles/stitches.config'

export type GlowVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('div', {
  position: 'absolute',
  zIndex: '-1',
  br: '$full',
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
        bg: 'linear-gradient(135deg, $purple400 0%, $navy_blue100 100%)'
      }
    },
    position: {
      top: {
        top: 0,
        right: 0,

        '@lg': {
          left: 0
        }
      },
      bottom: {
        bottom: 0,
        right: '100%',

        '@lg': {
          right: 0
        }
      }
    },

    intensity: {
      normal: {
        w: '120px',
        h: '120px',

        '@lg': {
          w: '160px',
          h: '160px'
        },

        '@xxl': {
          w: '120px',
          h: '120px',
          zIndex: '1'
        }
      },

      medium: {
        w: '140px',
        h: '140px'
      }
    }
  },

  defaultVariants: {
    color: 'pink',
    intensity: 'normal'
  }
})
