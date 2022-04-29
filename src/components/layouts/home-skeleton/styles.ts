import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  display: 'grid',
  gap: 20,

  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },

  '& .skeleton-item': {
    w: 310,
    h: 358,
    br: '$lg',

    '@lg': {
      w: 358
    }
  }
})
