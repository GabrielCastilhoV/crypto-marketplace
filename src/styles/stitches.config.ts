import { createStitches } from '@stitches/react'
import { media, theme, utils } from './config'

const stitches = createStitches({
  theme,
  media,
  utils
})

export const { styled, getCssText, globalCss, keyframes, css, createTheme } =
  stitches
