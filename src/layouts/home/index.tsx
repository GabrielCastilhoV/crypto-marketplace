import { Header } from 'modules'
import { Card, Category, Glow } from 'components'

import { GetNftsQuery } from 'graphql/generated/schema'

import * as S from './styles'

export const HomeLayout = ({ nfts }: GetNftsQuery) => {
  return (
    <S.Wrapper>
      <Header showSearch />

      <S.Content>
        <Glow color="pink" position="top" intensity="medium" />
        <Glow color="blue" position="bottom" intensity="medium" />

        <Category />
        <S.CardsContainer>
          {nfts?.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </S.CardsContainer>
      </S.Content>
    </S.Wrapper>
  )
}
