import { Meta, Story } from '@storybook/react'

import { Search } from '.'

export default {
  title: 'Search',
  component: Search
} as Meta

export const Default: Story = (args) => <Search {...args} />
