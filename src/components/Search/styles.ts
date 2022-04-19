import { styled } from 'styles/stitches.config'

export const Wrapper = styled('label', {
  h: 40,
  borderRadius: '$md',
  background: 'rgba(239, 239, 255, 0.2)',
  padding: '$2 $3',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    w: 22,
    h: 22
  }
})

export const Input = styled('input', {
  w: '100%',
  bg: 'none',
  border: 'none',
  outline: 'none',
  color: '$white',
  fontWeight: '$light',

  '&::placeholder': {
    color: '$white'
  }
})
