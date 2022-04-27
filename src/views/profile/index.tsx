import { useState } from 'react'
import { IoGridOutline, IoSquareOutline } from 'react-icons/io5'

import { Header } from 'modules'
import { Button, Card, Glow, User, Historic } from 'components/elements'

import { CardMock } from 'components/elements/card/mock'
import { HistoricMock } from 'components/elements/historic/mock'

import * as S from './styles'

export const ProfileView = () => {
  const [isGrid, setIsGrid] = useState(true)

  return (
    <S.Wrapper>
      <div className="bgImage" />
      <Glow color="pink" position="top" intensity="medium" />
      <Glow color="blue" position="bottom" intensity="medium" />
      <Header />

      <S.Content>
        <S.Left>
          <S.HeaderContainer>
            <S.ProfileContainer>
              <User
                img="/images/user.png"
                name="Gabriel"
                size={80}
                isVerified
              />
              <h2>Gabriel</h2>
              <span>gabriel_castilho</span>
            </S.ProfileContainer>

            <S.CryptoContainer>
              <S.Currency>
                <h3>5.2 ETH</h3>
                <span>$10.223,23</span>
              </S.Currency>

              <img src="/images/etherium.png" alt="Etherium" />
            </S.CryptoContainer>
          </S.HeaderContainer>

          <S.HistoricContainer>
            <h2>Latest Activities</h2>
            <Historic data={HistoricMock} />
            <Button>View more</Button>
          </S.HistoricContainer>
        </S.Left>

        <S.Right>
          <h2>Latest Acquisitions</h2>
          <p>Your latest purchases, arrange according to your taste</p>

          <S.OrderContainer>
            <S.IconContainer className={!isGrid ? 'active' : ''}>
              <IoSquareOutline onClick={() => setIsGrid(false)} />
            </S.IconContainer>

            <S.IconContainer className={isGrid ? 'active' : ''}>
              <IoGridOutline onClick={() => setIsGrid(true)} />
            </S.IconContainer>
          </S.OrderContainer>

          <S.CardsContainer>
            {CardMock?.map((card, index) => (
              <Card
                className={
                  isGrid
                    ? 'animate__animated animate__flipInX'
                    : 'animate__animated animate__flipInY'
                }
                key={index}
                {...card}
                hideFooter={isGrid ? true : false}
                size={isGrid ? 'small' : 'normal'}
              />
            ))}
          </S.CardsContainer>
        </S.Right>
      </S.Content>
    </S.Wrapper>
  )
}
