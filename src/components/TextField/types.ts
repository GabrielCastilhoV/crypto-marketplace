import type { InputHTMLAttributes, ReactNode } from 'react'
import type { CSS } from 'styles/stitches.config'

import type { TextFieldVariants } from './styles'

export type TextFieldProps = {
  css?: CSS
  onInputChange?: (value: string) => void
  initialValue?: string
  icon?: ReactNode
  disabled?: boolean
  error?: string
} & TextFieldVariants &
  InputHTMLAttributes<HTMLInputElement>
