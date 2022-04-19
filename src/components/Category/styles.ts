import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  flexWrap: 'wrap',
  my: '$4'
})

export const Button = styled('button', {
  h: 36,
  borderRadius: '16px',
  padding: '$2 $3',
  fontWeight: '$bold',

  color: '$white',
  bg: 'rgba(239, 239, 239, 0.1)',
  border: '1px solid $gray400',
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    filter: 'brightness(0.8)'
  },

  '&.active': {
    bg: 'linear-gradient($bg, $bg) padding-box, linear-gradient(135deg, $purple600, $pink600) border-box',
    border: '2px solid transparent'
  }
})
