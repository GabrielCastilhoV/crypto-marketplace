import { User } from 'components/elements'

import { BidsListMock } from './mock'
import * as S from './styles'

export const BidsList = () => {
  return (
    <S.Wrapper>
      {BidsListMock?.map((item, index) => (
        <div className="item" key={index}>
          <div className="user">
            <User
              img={item.image}
              name={item.name}
              isVerified={item.isVerified}
            />
            <p>{item.name}</p>
          </div>

          <div className="price">
            <p>{item.price}</p>
            <span>{item.hours}</span>
          </div>
        </div>
      ))}
    </S.Wrapper>
  )
}
