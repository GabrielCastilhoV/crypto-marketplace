import { CardVariants } from './styles'

export type CardProps = {
  hideFooter?: boolean
  img: string
  price: string
  owner: {
    name: string
    img: string
  }
} & CardVariants
