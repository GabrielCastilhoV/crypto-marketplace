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

export const CategoryContainer = styled('div', {
  '@lg': {
    ml: '$20'
  }
})

export const SkeletonContainer = styled('div', {
  w: '100%',
  maxW: '1200px',
  m: '0 auto',
  p: '10px 0 50px 0',

  '@lg': {
    pt: 30
  }
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
    pt: 30,
    pb: 40
  }
})
