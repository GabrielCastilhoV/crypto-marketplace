import Image from 'next/image'

import { User } from 'components'

import type { CardProps } from './types'
import * as S from './styles'

export const Card = ({ img, owner, price, hideFooter, ...rest }: CardProps) => {
  return (
    <S.Wrapper {...rest}>
      <Image
        src={img}
        alt={`A photo of the owner's nft ${owner.name}`}
        layout="fill"
        objectFit="cover"
      />

      {!hideFooter && (
        <S.Footer>
          <S.Owner>
            <User img={owner.img} name={owner.name} />
            <div>
              <span>Owned by</span>
              <h5>{owner.name}</h5>
            </div>
          </S.Owner>

          <S.Price>
            <span>Price</span>
            <h5>{price}</h5>
          </S.Price>
        </S.Footer>
      )}
    </S.Wrapper>
  )
}
