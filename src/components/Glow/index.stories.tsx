import { Meta, Story } from '@storybook/react'

import { Glow } from '.'
import type { GlowProps } from './types'

export default {
  title: 'Glow',
  component: Glow
} as Meta

export const Default: Story<GlowProps> = (args) => <Glow {...args} />
