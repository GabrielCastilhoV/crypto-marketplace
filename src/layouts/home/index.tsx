import { Header, Navigation } from 'modules'
import { Card, Category, Glow } from 'components'
import { CardMock } from 'components/Card/mock'

import * as S from './styles'

export const HomeLayout = () => {
  return (
    <S.Wrapper>
      <Glow color="pink" position="top" intensity="medium" />
      <Glow color="blue" position="bottom" intensity="medium" />
      <Header showSearch />

      <Category />

      <S.NavContainer>
        <Navigation />
      </S.NavContainer>

      <S.CardsContainer>
        {CardMock?.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </S.CardsContainer>
    </S.Wrapper>
  )
}
