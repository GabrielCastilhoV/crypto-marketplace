import Image from 'next/image'

import { User } from 'components'

import type { CardProps } from './types'
import * as S from './styles'

export const Card = (props: CardProps) => {
  return (
    <S.Wrapper>
      <Image
        src={props.img}
        alt={`A photo of the owner's nft ${props.owner}`}
        layout="fill"
        objectFit="cover"
      />

      <S.Footer>
        <S.Owner>
          <User img={props.owner.img} name={props.owner.name} />
          <div>
            <span>Owned by</span>
            <h5>{props.owner.name}</h5>
          </div>
        </S.Owner>

        <S.Price>
          <span>Price</span>
          <h5>{props.price}</h5>
        </S.Price>
      </S.Footer>
    </S.Wrapper>
  )
}
