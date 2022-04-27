import { Meta, Story } from '@storybook/react'

import { Category } from '.'
import { CategoryMock } from './mock'

export default {
  title: 'Category',
  component: Category
} as Meta

export const Default: Story = (args) => (
  <Category categories={CategoryMock} {...args} />
)
