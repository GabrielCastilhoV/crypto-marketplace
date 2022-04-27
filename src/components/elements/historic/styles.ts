import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  bg: 'linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%)',
  border: '1px solid $gray400',
  br: '$sm',

  '& .item': {
    w: '100%',
    display: 'grid',
    align: 'center',
    gridTemplateColumns: '35px repeat(2, 1fr)',
    p: '$4',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',

    '& .percent': {
      display: 'none'
    },

    '@lg': {
      gridTemplateColumns: '50px repeat(2, 1fr) 50px',

      '& .percent': {
        display: 'flex',
        align: 'center'
      }
    },

    '&.income': {
      p: {
        color: '$white'
      },

      'span, h4, svg': {
        color: '$navy_blue100'
      }
    },

    '&.outcome': {
      p: {
        color: '$white'
      },

      'span, h4, svg': {
        color: '$pink100'
      }
    },

    '& .price': {
      textAlign: 'center'
    },

    '&:not(&:last-child)': {
      borderBottom: '1px solid $gray400'
    },

    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.05)',
      transform: 'skewX(45deg) translateX(600px)',
      filter: 'blur(20px)',
      transition: '1s'
    },

    '&:hover::before': {
      transform: 'skewX(45deg) translateX(-450px)'
    }
  }
})
