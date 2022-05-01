import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  mb: 100,

  h1: {
    fontSize: '$lg',
    textAlign: 'center'
  },

  '& .description': {
    mt: '$2',
    textAlign: 'center',
    fontSize: '$xs',
    fontWeight: '$light',
    opacity: 0.8
  }
})

export const CryptoContainer = styled('div', {
  w: '100%',

  my: 30,

  '@lg': {
    display: 'flex',
    align: 'center'
  }
})

export const ProfileContainer = styled('div', {
  w: '40%',
  display: 'flex',
  align: 'center',
  gap: '1rem',

  h2: {
    fontSize: '$lg'
  },

  span: {
    color: '$pink100'
  }
})

export const Currency = styled('div', {
  w: '60%',
  display: 'block',
  p: '$6 $10',
  position: 'relative',

  bg: 'linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%)',
  border: '1px solid $gray400',
  borderRadius: '16px',

  img: {
    position: 'absolute',
    top: -70,
    right: 0
  },

  h3: {
    fontSize: '$xl',
    mb: '$2'
  },

  span: {
    color: '$pink100',
    fontSize: '$sm'
  }
})

export const Content = styled('div', {
  p: '$6',
  mb: '100px',
  maxW: '$md',
  margin: '0 auto'
})

export const HistoricContainer = styled('div', {
  m: '$4 auto'
})
