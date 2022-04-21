import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  pt: '$4',

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
