import { MenuVariants } from './styles'

export type MenuProps = {
  handleToggle: React.Dispatch<React.SetStateAction<boolean>>
} & MenuVariants
