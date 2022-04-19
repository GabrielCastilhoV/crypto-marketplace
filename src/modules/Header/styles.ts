import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  mt: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  h: 80,
  px: '$4',

  img: {
    cursor: 'pointer'
  }
})

export const Menu = styled('button', {
  bg: 'transparent'
})
