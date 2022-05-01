import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: '100%',
  maxW: '$lg',
  m: '0 auto 100px',

  '@lg': {
    m: '0 auto 20px'
  },

  h3: {
    fontSize: '$sm',
    fontWeight: '$bold',
    m: '$4'
  }
})

export const Header = styled('div', {
  '& .banner': {
    w: '100%',
    h: 380,
    position: 'relative',

    '@lg': {
      m: '10px auto',

      img: {
        br: '$md'
      }
    }
  },

  '& .number': {
    color: '$pink100',
    fontSize: '$lg',
    fontWeight: '$bold'
  },

  h1: {
    fontSize: '$xl',
    mb: '$2'
  },

  '@lg': {
    display: 'flex'
  }
})

export const Content = styled('div', {
  p: '$4',

  '@lg': {
    display: 'flex',
    flexDir: 'column',
    justify: 'center'
  }
})

export const OwnedWrapper = styled('div', {
  borderY: '1px solid $gray400',
  p: '$4 0',

  display: 'flex',
  align: 'center',
  justify: 'space-between',

  '& .user': {
    display: 'flex',
    align: 'center',
    justify: 'center',
    textAlign: 'center',

    span: {
      color: '$pink100',
      fontSize: '$xs',
      fontWeight: '$light',
      fontStyle: 'italic'
    },

    img: {
      w: 32,
      h: 32
    },

    div: {
      ml: '$2',

      h5: {
        fontSize: '$sm'
      }
    }
  }
})

export const Description = styled('div', {
  w: '100%',

  h2: {
    fontSize: '$sm',
    my: '$4'
  },

  '& p': {
    fontWeight: '$light',
    color: '$gray100',
    opacity: 0.7,
    textAlign: 'justify'
  }
})
