import { Meta, Story } from '@storybook/react'

import { Empty } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: Story = (args) => <Empty {...args} />
