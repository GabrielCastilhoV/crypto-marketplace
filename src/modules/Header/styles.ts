import { styled } from 'styles/stitches.config'

export const Wrapper = styled('nav', {
  w: '100%',
  pt: '$4',
  px: '$4',

  position: 'sticky',
  zIndex: '$overlay',
  top: 0,
  right: 0,

  '&.hasScroll': {
    bg: 'linear-gradient(130deg, rgba(0, 0, 0, 0.1) 0%, rgba(27, 23, 33, 1) 100%)',
    backdropFilter: 'blur(15px)'
  }
})

export const Content = styled('div', {
  w: '100%',
  maxW: '$xl',
  m: '0 auto',

  display: 'grid',
  alignItems: 'center',
  gridTemplateAreas: `'logo menu' 'search search'`,

  '&.logo': {
    gridArea: 'logo'
  },

  img: {
    cursor: 'pointer'
  },

  '@lg': {
    py: '$8',
    px: 50,
    gridTemplateAreas: `'logo search menu'`,
    gridTemplateColumns: '1fr 400px 100px'
  }
})

export const SearchContainer = styled('div', {
  gridArea: 'search'
})

export const Menu = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  bg: 'transparent',

  gridArea: 'menu'
})
