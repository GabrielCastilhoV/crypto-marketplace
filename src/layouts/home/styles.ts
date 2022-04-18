import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  h: '100vh',
  position: 'relative'
})

export const CardsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 20,
  p: '10px 0 100px 0',
  overflow: 'auto'
})

export const NavContainer = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0
})
