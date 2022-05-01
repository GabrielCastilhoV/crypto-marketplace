import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  bg: 'linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%)',
  border: '1px solid $gray400',
  br: '$sm',

  '& .item': {
    w: '100%',
    display: 'grid',
    gridTemplateColumns: '30px 1fr 100px',
    align: 'center',

    p: '$4',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',

    '@lg': {
      gridTemplateColumns: '50px 1fr 120px'
    },

    '& .user': {
      display: 'flex',
      gap: 10,

      '& p': {
        textAlign: 'left'
      },

      div: {
        display: 'flex',
        flexDir: 'column'
      },

      img: {
        w: 40,
        h: 40
      }
    },

    '& svg, span': {
      float: 'right'
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
      transform: 'skewX(45deg) translateX(1200px)',
      filter: 'blur(20px)',
      transition: '1s'
    },

    '&:hover::before': {
      transform: 'skewX(45deg) translateX(-480px)'
    }
  }
})
