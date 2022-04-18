import Image from 'next/image'

import type { UserProps } from './types'
import * as S from './styles'

export const User = ({ img, name }: UserProps) => {
  return (
    <S.Wrapper>
      <Image
        src={img}
        alt={`a photo of the user ${name}`}
        width={48}
        height={48}
      />
    </S.Wrapper>
  )
}
