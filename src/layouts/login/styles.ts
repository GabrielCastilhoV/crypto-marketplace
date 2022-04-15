import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  h: '100%',
  display: 'flex',
  align: 'center',
  justify: 'center',
  flexDir: 'column',

  h2: {
    fontSize: '$lg',
    mb: '$4'
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
