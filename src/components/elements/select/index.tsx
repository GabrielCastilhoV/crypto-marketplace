import { IoChevronDown } from 'react-icons/io5'

import * as S from './styles'

export const Select = () => {
  return (
    <S.Wrapper>
      <IoChevronDown />

      <select>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 60 days</option>
      </select>
    </S.Wrapper>
  )
}
