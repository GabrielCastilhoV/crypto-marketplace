import { styled } from 'styles/stitches.config'

export const Wrapper = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  h: 80,
  px: '$4',
  bg: '$bg',

  '@lg': {
    w: 80,
    h: '100vh',
    flexDir: 'column',
    justifyContent: 'center',
    gap: 40,
    borderRight: '1px solid #2b292e'
  }
})
