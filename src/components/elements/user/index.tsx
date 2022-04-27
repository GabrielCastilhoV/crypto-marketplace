import Image from 'next/image'

import type { UserProps } from './types'
import * as S from './styles'

export const User = ({
  img,
  name,
  size = 48,
  isVerified = false
}: UserProps) => {
  return (
    <S.Wrapper css={{ width: size, height: size }}>
      {isVerified && (
        <img
          className="verified"
          src="/icons/verified.svg"
          alt={`verified user: ${name}`}
        />
      )}

      <Image
        src={img}
        alt={`a photo of the user ${name}`}
        width={size}
        height={size}
      />
    </S.Wrapper>
  )
}
