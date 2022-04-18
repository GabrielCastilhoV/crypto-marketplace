import { Meta, Story } from '@storybook/react'

import { Navigation } from '.'

export default {
  title: 'Navigation',
  component: Navigation
} as Meta

export const Mobile: Story = (args) => (
  <div style={{ margin: '0 auto', maxWidth: 320 }}>
    <Navigation {...args} />
  </div>
)
