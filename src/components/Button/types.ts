import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { CSS } from 'styles/stitches.config'

import type { ButtonVariants } from './styles'

export type ButtonProps = {
  css?: CSS
  children?: ReactNode
  icon?: ReactNode
} & ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>
