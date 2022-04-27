import { IoSearch } from 'react-icons/io5'

import * as S from './styles'

export const Search = () => {
  return (
    <S.Wrapper>
      <IoSearch />
      <S.Input placeholder="Search by categories, artists..." />
    </S.Wrapper>
  )
}
