import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  bg: 'linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%)',
  border: '1px solid $gray400',
  br: '$sm',
  mx: '$4',

  '& .item': {
    display: 'flex',
    align: 'center',
    justify: 'space-between',
    p: '$4',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',

    '& .user': {
      display: 'flex',
      align: 'center',

      '& p': {
        ml: '$2'
      }
    },

    '&:not(&:last-child)': {
      borderBottom: '1px solid $gray400'
    },

    '& .price': {
      color: '$pink100',
      textAlign: 'center'
    },

    '& p': {
      fontSize: '$xs',
      fontWeight: '$bold'
    },

    span: {
      fontWeight: '$light'
    },

    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.05)',
      transform: 'skewX(45deg) translateX(1100px)',
      filter: 'blur(20px)',
      transition: '1s'
    },

    '&:hover::before': {
      transform: 'skewX(45deg) translateX(-450px)'
    }
  }
})
