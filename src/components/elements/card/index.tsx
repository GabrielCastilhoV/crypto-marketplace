import Image from 'next/image'

import { User } from '../user'

import type { CardProps } from './types'
import * as S from './styles'

export const Card = ({
  className = '',
  image,
  owner,
  price,
  hideFooter,
  ...rest
}: CardProps) => {
  return (
    <S.Wrapper {...rest} className={className}>
      <Image
        className="bgCard"
        src={image.url}
        alt={`A photo of the owner's nft ${owner.name}`}
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />

      {!hideFooter && (
        <S.Footer>
          <S.Owner>
            <User img={owner.image.url} name={owner.name} />
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
