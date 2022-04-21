import { Meta, Story } from '@storybook/react'

import { User } from '.'
import type { UserProps } from './types'

export default {
  title: 'User',
  component: User,
  args: {
    name: 'Gabriel',
    img: '/images/avatar.png'
  }
} as Meta

export const Default: Story<UserProps> = (args) => <User {...args} />
