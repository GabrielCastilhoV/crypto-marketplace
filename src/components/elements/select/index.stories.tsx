import { Meta, Story } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'Select',
  component: Select
} as Meta

export const Default: Story = (args) => <Select {...args} />
