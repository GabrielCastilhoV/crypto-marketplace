import { Header } from 'modules'
import { Card, Category, Glow } from 'components'

import type { HomeProps } from 'pages'

import * as S from './styles'

export const HomeLayout = ({ nfts, categories }: HomeProps) => {
  return (
    <S.Wrapper>
      <Header showSearch />

      <S.Content>
        <Glow color="pink" position="top" intensity="medium" />
        <Glow color="blue" position="bottom" intensity="medium" />

        <S.CategoryContainer>
          <Category categories={categories} />
        </S.CategoryContainer>

        <S.CardsContainer>
          {nfts?.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </S.CardsContainer>
      </S.Content>
    </S.Wrapper>
  )
}
