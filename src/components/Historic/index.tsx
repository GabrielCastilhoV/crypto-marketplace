import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { HistoricProps } from './types'
import * as S from './styles'

interface IHistoricProps {
  data: HistoricProps
}

export const Historic = ({ data }: IHistoricProps) => {
  return (
    <S.Wrapper>
      {data?.map((item, index) => (
        <div className={`item ${item.type}`} key={index}>
          <div>
            <img
              src={
                item.type === 'income'
                  ? '/icons/logoHistoric.svg'
                  : '/icons/hammer.svg'
              }
              alt={item.type}
            />
          </div>

          <div>
            <p>{item.userKey}</p>
            <span>{item.createdAt}</span>
          </div>

          <div className="price">
            <h4>{item.price.etherium}</h4>
            <span>{item.price.dollar}</span>
          </div>

          <div className="percent">
            {item.type === 'income' ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}

            <span>{item.percent}</span>
          </div>
        </div>
      ))}
    </S.Wrapper>
  )
}
