import { Meta, Story } from '@storybook/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Button } from '.'
import type { ButtonProps } from './types'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: { type: 'string' }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Sign in</Button>
)

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  icon: <AiOutlineShoppingCart />,
  color: 'secondary'
}
