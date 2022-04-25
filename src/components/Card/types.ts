import { CardVariants } from './styles'

export type CardProps = {
  id: string
  price: string
  image: { url: string }
  owner?: {
    name: string
    image: { url: string }
  }
  className?: string
  hideFooter?: boolean
} & CardVariants
