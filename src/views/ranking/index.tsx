import { Header } from 'modules'

import { Glow, Select, Ranking } from 'components/elements'

import * as S from './styles'

export const RankingView = () => {
  return (
    <S.Wrapper>
      <Header />

      <Glow color="pink" position="top" intensity="medium" />
      <Glow color="blue" position="bottom" intensity="medium" />

      <S.Content>
        <h1>Ranking</h1>
        <p className="description">
          Top NFTs ranked by volume sales and values!
        </p>

        <Select />

        <Ranking />
      </S.Content>
    </S.Wrapper>
  )
}
