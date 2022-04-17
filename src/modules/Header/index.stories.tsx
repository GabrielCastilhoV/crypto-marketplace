import { Meta, Story } from '@storybook/react'

import { Header } from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story = (args) => <Header {...args} />
