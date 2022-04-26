import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  h: '100%',
  position: 'relative',

  '@lg': {
    backgroundImage: 'url(/images/bgImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top',
    backgroundSize: 'contain'
  }
})

export const Content = styled('div', {
  maxW: '$xl',
  m: '0 auto',
  px: '$8'
})

export const CardsContainer = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'center',
  flexWrap: 'wrap',
  gap: 20,
  p: '10px 0 100px 0',
  overflow: 'auto',

  '@lg': {
    pt: 30
  }
})
