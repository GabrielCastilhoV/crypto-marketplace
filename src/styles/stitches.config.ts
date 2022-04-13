import * as Stitches from '@stitches/react'
import { media, theme, utils } from './config'

export type CSS = Stitches.CSS<typeof config>
export type VariantProps<T> = Stitches.VariantProps<T>

const stitches = Stitches.createStitches({
  theme,
  media,
  utils
})

export const {
  config,
  styled,
  getCssText,
  globalCss,
  keyframes,
  css,
  createTheme
} = stitches
