import { Meta, Story } from '@storybook/react'

import { BidsList } from '.'

export default {
  title: 'BidsList',
  component: BidsList
} as Meta

export const Default: Story = (args) => <BidsList {...args} />
