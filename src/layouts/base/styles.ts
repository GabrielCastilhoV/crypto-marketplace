import { styled, VariantProps } from 'styles/stitches.config'

export type BaseVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('section', {
  w: '100%',
  h: '100vh',

  '@lg': {
    display: 'grid'
  },

  variants: {
    hasNavigation: {
      true: {
        gridTemplateColumns: '80px 1fr'
      },
      false: {
        gridTemplateColumns: '1fr'
      }
    }
  }
})

export const NavContainer = styled('div', {
  position: 'fixed',
  zIndex: '$base',
  bottom: 0,
  right: 0,
  left: 0,

  '@lg': {
    position: 'unset'
  }
})
