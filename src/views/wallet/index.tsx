import { Header } from 'modules'

import { Button, Card, Glow, User, Historic } from 'components/elements'
import { HistoricMock } from 'components/elements/historic/mock'

import * as S from './styles'

export const WalletView = () => {
  return (
    <S.Wrapper>
      <Header />

      <Glow color="pink" position="top" intensity="medium" />
      <Glow color="blue" position="bottom" intensity="medium" />

      <S.Content>
        <S.CryptoContainer>
          <S.ProfileContainer>
            <User img="/images/user.png" name="Gabriel" size={80} isVerified />
            <div>
              <h2>Gabriel</h2>
              <span>gabriel_castilho</span>
            </div>
          </S.ProfileContainer>

          <S.Currency>
            <h3>5.2 ETH</h3>
            <span>$10.223,23</span>
            <img src="/images/money.png" alt="Etherium" />
          </S.Currency>
        </S.CryptoContainer>

        <Button color="secondary">Add funds</Button>

        <h3>Last activies</h3>

        <S.HistoricContainer>
          <Historic data={HistoricMock} />
        </S.HistoricContainer>

        <Button>Show More</Button>
      </S.Content>
    </S.Wrapper>
  )
}
