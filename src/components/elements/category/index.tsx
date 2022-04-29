import { useEffect, useState } from 'react'

import { CategoryProps } from './type'
import * as S from './styles'

export const Category = ({
  allCategories,
  setAllCategories
}: CategoryProps) => {
  const [categories, setCategories] = useState<string>('')

  useEffect(() => {
    setAllCategories(categories)
  }, [categories])

  return (
    <S.Wrapper>
      <S.Button
        className={categories.length === 0 ? 'active' : ''}
        onClick={() => setCategories('')}
      >
        All
      </S.Button>

      {allCategories?.map((category) => (
        <S.Button
          key={category.name}
          className={categories.includes(category.name) ? 'active' : ''}
          onClick={() => setCategories(category.name)}
        >
          {category.name}
        </S.Button>
      ))}
    </S.Wrapper>
  )
}
