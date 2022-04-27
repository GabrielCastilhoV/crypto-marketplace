import { Meta, Story } from '@storybook/react'

import { Category } from '.'

export default {
  title: 'Category',
  component: Category
} as Meta

export const Default: Story = (args) => <Category {...args} />
