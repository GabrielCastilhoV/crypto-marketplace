import { Meta, Story } from '@storybook/react'

import { TextField } from '.'
import type { TextFieldProps } from './types'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />
