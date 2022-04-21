import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  h: '100%',
  position: 'relative',

  '@lg': {
    backgroundImage: 'url(/img/bgImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top',
    backgroundSize: 'contain'
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
    ml: 50,
    justify: 'flex-start'
  }
})

export const NavContainer = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: '$base',

  '@lg': {
    w: '80px',
    h: '100%'
  }
})
