import { Header, Navigation } from 'modules'
import { Card, Glow, Search } from 'components'
import { CardMock } from 'components/Card/mock'

import * as S from './styles'

export const HomeLayout = () => {
  return (
    <S.Wrapper>
      <Glow color="pink" position="top" />
      <Glow color="blue" position="bottom" />
      <Header />

      <Search />

      <S.CardsContainer>
        {CardMock?.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </S.CardsContainer>

      <S.NavContainer>
        <Navigation />
      </S.NavContainer>
    </S.Wrapper>
  )
}
