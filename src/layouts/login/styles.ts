import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  h: '100vh',
  display: 'flex',
  align: 'center',
  px: '$8',

  h2: {
    fontSize: '$lg',
    mb: '$4'
  },

  '@lg': {
    gap: 100
  },

  '@xxl': {
    bg: 'linear-gradient(0deg, rgba(27, 23, 33, 0.6), rgba(27, 23, 33, 0.6)), url(/images/bgImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }
})

export const Left = styled('div', {
  '@lg': {
    w: '50%',
    h: '100%',
    maxH: '800px',

    backgroundImage: 'url(/images/bgLogin.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed'
  },

  '@xxl': {
    display: 'none'
  }
})

export const Right = styled('div', {
  w: '100%',
  h: '100vh',

  display: 'flex',
  align: 'center',
  justify: 'center',
  flexDir: 'column',

  '@lg': {
    w: '50%',
    px: '$10'
  },

  '@xxl': {
    w: '50%',
    m: '0 auto'
  }
})

export const Form = styled('form', {
  w: '100%',
  py: '$8',
  display: 'flex',
  flexDir: 'column'
})

export const ForgotPassword = styled('div', {
  display: 'flex',
  justify: 'flex-end',

  a: {
    maxW: '180px',
    my: '$4',
    textAlign: 'right',
    color: '$white'
  }
})

export const Footer = styled('div', {
  w: '100%',

  '.divider': {
    w: '50%',
    m: '0 auto',
    mb: '$8',
    borderTop: '1px solid $gray50'
  }
})
