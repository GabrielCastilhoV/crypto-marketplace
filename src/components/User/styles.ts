import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: 48,
  h: 48,
  br: '$full',
  border: '2px solid $white',

  position: 'relative',

  '.verified': {
    position: 'absolute',
    zIndex: '1',
    bottom: 0,
    right: -5
  }
})
