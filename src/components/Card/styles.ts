import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: 358,
  h: 358,
  position: 'relative',
  cursor: 'pointer',
  transition: '$fast',

  img: {
    br: '$lg'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export const Footer = styled('div', {
  bg: 'rgba(255, 255, 255, 0.01)',
  backdropFilter: 'blur(28px)',
  h: 96,
  px: 24,
  br: '0 0 $lg $lg',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,

  span: {
    fontSize: '$xs',
    fontWeight: '$normal',
    color: '$pink100'
  },

  h5: {
    fontSize: '$md',
    fontWeight: '$bold'
  }
})

export const Owner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2'
})

export const Price = styled('div', {})
