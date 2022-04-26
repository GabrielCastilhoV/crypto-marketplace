import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  w: '100%',
  h: '100%',

  '@lg': {
    display: 'grid',
    gridTemplateColumns: '80px 1fr'
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
