import { useHomeContext } from 'contexts'

import { IoSearch } from 'react-icons/io5'

import * as S from './styles'

export const Search = () => {
  const { setTextFilter } = useHomeContext()

  return (
    <S.Wrapper>
      <IoSearch />
      <S.Input
        placeholder="Search by categories, artists..."
        onChange={(e) => setTextFilter(e.target.value)}
      />
    </S.Wrapper>
  )
}
