import { Meta, Story } from '@storybook/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Card } from '.'
import type { CardProps } from './types'
import { CardMock } from './mock'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story<CardProps> = (args) => (
  <Card {...CardMock[0]} {...args} />
)
