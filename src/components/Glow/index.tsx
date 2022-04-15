import { GlowProps } from './types'
import * as S from './styles'

export const Glow = ({ ...rest }: GlowProps) => {
  return <S.Wrapper {...rest} />
}
