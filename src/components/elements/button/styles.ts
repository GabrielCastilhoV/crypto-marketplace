import { styled, VariantProps } from 'styles/stitches.config'

export type ButtonVariants = VariantProps<typeof Button>

export const Button = styled('button', {
  h: 48,
  bg: '$bg',
  border: '2px solid $gray400',
  br: '$xs',
  px: '$4',
  cursor: 'pointer',

  span: {
    fontWeight: '$bold',
    fontSize: '$xs'
  },

  variants: {
    color: {
      primary: {
        bg: 'linear-gradient($bg, $bg) padding-box, linear-gradient(45deg, $purple600, $pink600) border-box',
        border: '2px solid transparent',

        '&:hover': {
          filter: 'brightness(1.2)'
        },

        span: {
          bg: '$pink_gradient',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      },
      secondary: {
        bg: '$pink_gradient',
        boxShadow: '0px 1px 10px rgba(189, 48, 242, 0.5)',
        color: '$white',

        '&:hover': {
          filter: 'brightness(0.9)'
        }
      }
    },
    size: {
      large: {
        w: '100%'
      },
      medium: {
        maxW: '215px'
      },
      small: {
        w: 42,
        h: 42,
        br: '$full',
        border: 'none',
        px: 0,

        svg: {
          w: 20,
          h: 20,
          color: '$white'
        },

        '@lg': {
          w: 50,
          h: 50,

          svg: {
            w: 26,
            h: 26
          }
        }
      }
    }
  },

  defaultVariants: {
    color: 'primary',
    size: 'large'
  }
})
