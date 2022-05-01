import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { RankingMock } from './mock'
import * as S from './styles'

export const Ranking = () => {
  return (
    <S.Wrapper>
      {RankingMock?.map((item, index) => (
        <div className={`item ${item.type}`} key={index}>
          <span>{index}</span>

          <div className="user">
            <img src={item.user.image} alt={item.user.name} />

            <div>
              <p>{item.user.name}</p>
              <span>{item.user.key}</span>
            </div>
          </div>

          <div className="price">
            <h4>{item.price}</h4>

            <span>{item.percent}</span>

            {item.type === 'income' ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </div>
        </div>
      ))}
    </S.Wrapper>
  )
}
