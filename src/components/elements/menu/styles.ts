import { styled, keyframes, VariantProps } from 'styles/stitches.config'

export type MenuVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('menu', {
  bg: 'rgba(27, 23, 33, 0.9)',
  h: '100vh',
  position: 'fixed',
  inset: 0,
  zIndex: '$menu',
  opacity: 0,
  transition: 'opacity linear 0.3s',

  p: '$6 $12',

  variants: {
    state: {
      open: {
        opacity: 1,
        pointerEvents: 'all'
      },

      closed: {
        opacity: 0,
        pointerEvents: 'none'
      }
    }
  }
})

export const Header = styled('header', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',

  svg: {
    w: 32,
    h: 32,
    cursor: 'pointer'
  }
})

export const MenuNav = styled('nav', {
  h: '100%',
  display: 'flex',
  align: 'center',
  justify: 'center',
  flexDir: 'column'
})

const hoverAnimation = keyframes({
  '0%': { w: 0, left: '50%' },
  '100%': { w: '100%', left: 0 }
})

export const MenuLink = styled('a', {
  position: 'relative',
  color: '$white',
  fontSize: '$md',
  textDecoration: 'none',
  mb: '$4',

  '&:hover': {
    '&::after': {
      content: '',
      position: 'absolute',
      display: 'block',
      h: '0.3rem',
      bg: '$purple600',
      animation: `${hoverAnimation} 0.3s forwards`
    }
  }
})

export const Profile = styled('div', {
  w: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  p: '$8',

  display: 'flex',
  align: 'center',
  justify: 'space-between',

  '.user': {
    display: 'flex',
    align: 'center',

    span: {
      color: '$white',
      fontWeight: '$bold',
      ml: '$2'
    }
  }
})

export const SignOut = styled('a', {
  textDecoration: 'none',
  color: '$white',
  fontWeight: '$bold'
})
