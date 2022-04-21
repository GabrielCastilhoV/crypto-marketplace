import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  w: '100%',
  maxW: '$xl',
  m: '0 auto',
  h: '100%',
  px: '$8',

  '@lg': {
    h: '100vh'
  }
})
