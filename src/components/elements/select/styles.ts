import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: '100%',
  br: '18px',
  bg: 'transparent',
  color: '$white',
  position: 'relative',
  my: '$4',

  svg: {
    w: 20,
    h: 20,
    pointerEvents: 'none',
    color: '$white',

    position: 'absolute',
    top: 10,
    right: 20
  },

  select: {
    w: '100%',
    h: 40,
    cursor: 'pointer',
    outline: 'none',

    fontSize: '$md',
    br: '18px',
    bg: 'linear-gradient(#3A3141, $gray400) padding-box, linear-gradient(45deg, $purple600, $pink600) border-box',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    px: 20,
    border: '2px solid',
    color: '$white',
    borderImageSource: 'linear-gradient(135deg, #9A4DFF 0%, #F600DD 100%)',

    option: {
      bg: '$gray400'
    }
  }
})
