import { Meta, Story } from '@storybook/react'

import { Historic } from '.'
import { HistoricMock } from './mock'

export default {
  title: 'Historic',
  component: Historic
} as Meta

export const Default: Story = (args) => (
  <Historic data={HistoricMock} {...args} />
)
