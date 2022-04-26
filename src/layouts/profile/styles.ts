import type * as Stitches from '@stitches/react'
import { styled } from 'styles/stitches.config'

export type ProfileVariants = Stitches.VariantProps<typeof CardsContainer>

export const Wrapper = styled('div', {
  h: '100vh',

  '& .bgImage': {
    position: 'absolute',
    zIndex: '-1',
    top: 0,
    left: 0,
    right: 0,

    w: '100%',
    h: 222,
    backgroundImage: 'url(/images/bgProfile.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',

    '@lg': {
      display: 'none'
    }
  }
})

export const Content = styled('div', {
  maxW: '$xl',
  m: '0 auto',
  px: '$8',

  '@lg': {
    display: 'flex'
  }
})

export const HeaderContainer = styled('header', {
  w: '100%',
  h: 200,

  display: 'flex',
  align: 'center',
  justify: 'center',

  h2: {
    m: '$4 0 $2'
  },

  span: {
    color: '$pink100'
  },

  '@lg': {
    h: 170,
    align: 'flex-start'
  }
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'center',
  flexDirection: 'column',

  '@lg': {
    h2: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '20px'
    }
  }
})

export const CryptoContainer = styled('div', {
  display: 'none',

  '@lg': {
    display: 'flex',
    align: 'center',
    justify: 'center',
    flexDirection: 'column',
    position: 'relative',

    img: {
      position: 'absolute',
      bottom: -130,
      right: -130
    }
  }
})

export const Currency = styled('div', {
  display: 'none',

  '@lg': {
    display: 'block',
    p: '$4 $10',
    ml: 20,

    bg: 'linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%)',
    border: '1px solid $gray400',
    borderRadius: '16px',

    h3: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '20px'
    }
  }
})

export const OrderContainer = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'center',
  gap: 20,
  my: '$6',

  svg: {
    w: 20,
    h: 20
  },

  '@lg': {
    my: '$4',

    svg: {
      w: 30,
      h: 30
    }
  }
})

export const IconContainer = styled('div', {
  cursor: 'pointer',

  '&.active': {
    display: 'flex',
    align: 'center',
    justify: 'center',
    bg: 'rgba(255, 255, 255, 0.3)',
    padding: '$2',
    br: '$xs'
  }
})

export const CardsContainer = styled('div', {
  gap: 20,
  p: '10px 0 100px 0',
  overflow: 'auto',
  display: 'flex',
  align: 'center',
  justify: 'center',
  flexWrap: 'wrap'
})

export const Left = styled('div', {
  '@lg': {
    w: '50%',
    height: 'calc(100vh - 150px)',
    borderRight: '1px solid $gray400'
  }
})
export const Right = styled('div', {
  'h2, p': {
    textAlign: 'center'
  },

  '> p': {
    my: '$2',
    fontWeight: '$light'
  },

  '@lg': {
    w: '50%',
    height: 'calc(100vh - 150px)',

    display: 'flex',
    flexDirection: 'column'
  }
})

export const HistoricContainer = styled('div', {
  maxW: 500,
  m: '$10 auto',

  h2: {
    mb: '$6'
  },

  button: {
    mt: '$6'
  }
})
