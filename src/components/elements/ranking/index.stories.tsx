import { Meta, Story } from '@storybook/react'

import { Ranking } from '.'

export default {
  title: 'Ranking',
  component: Ranking
} as Meta

export const Default: Story = (args) => <Ranking {...args} />
