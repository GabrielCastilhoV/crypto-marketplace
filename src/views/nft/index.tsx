import { useRouter } from 'next/router'
import Image from 'next/image'

import { BidsList, Button } from 'components/elements'
import type { NftPageProps } from 'pages/nft/[id]'

import * as S from './styles'

export const NftView = (props: NftPageProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.Header>
        <div className="banner">
          <Image src={props.image} alt={props.owner.name} layout="fill" />
        </div>

        <S.Content>
          <span className="number">#{props.number}</span>
          <h1>{props.name}</h1>

          <S.OwnedWrapper>
            <div className="user">
              <img src={props.owner.image} alt={props.owner.name} />
              <div>
                <span>Owned by</span>
                <h5>{props.owner.name}</h5>
              </div>
            </div>

            <Button size="medium" onClick={() => router.push('/profile')}>
              Follow
            </Button>
          </S.OwnedWrapper>

          <S.Description>
            <h2>Description</h2>
            <p>{props.description}</p>
          </S.Description>
        </S.Content>
      </S.Header>

      <h3>Last bids</h3>
      <BidsList />
    </S.Wrapper>
  )
}
