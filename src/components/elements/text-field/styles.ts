import { styled, VariantProps } from 'styles/stitches.config'

export type TextFieldVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('div', {
  h: 48,
  bg: '$gray600',
  border: '2px solid $gray400',
  px: '$4',

  '&:focus-within': {
    bg: 'linear-gradient($bg, $bg) padding-box, linear-gradient(135deg, $purple600, $pink600) border-box',
    border: '2px solid transparent'
  },

  variants: {
    radius: {
      top: {
        br: '$sm $sm 0 0'
      },
      bottom: {
        br: '0 0 $sm $sm'
      }
    }
  }
})

export const InputWrapper = styled('div', {
  h: '100%',
  display: 'flex',
  align: 'center'
})

export const Input = styled('input', {
  w: '100%',
  h: '100%',
  background: 'transparent',
  ml: '$2',
  opacity: '0.8',
  color: '$gray50',
  border: 0,
  outline: 0
})

export const Icon = styled('div', {
  display: 'flex',
  fontSize: '$md'
})

export const Error = styled('p', {})
