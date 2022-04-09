import { globalStyles } from 'styles/global'

import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const decorators = [
  (Story) => {
    globalStyles()
    return <Story />
  }
]
