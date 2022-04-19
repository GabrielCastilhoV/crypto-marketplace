import { styled } from 'styles/stitches.config'

export const Wrapper = styled('label', {
  h: 40,
  borderRadius: '$md',
  bg: 'rgba(239, 239, 255, 0.2)',
  px: '$3',
  m: '$3 0 $5 0',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    w: 22,
    h: 22
  },

  '&:focus-within': {
    boxS: '#CF7AFF 0px 2px 2px 0px;'
  }
})

export const Input = styled('input', {
  w: '100%',
  h: '100%',
  bg: 'none',
  border: 'none',
  outline: 'none',
  color: '$white',
  fontWeight: '$light',

  '&::placeholder': {
    color: '$white'
  }
})
