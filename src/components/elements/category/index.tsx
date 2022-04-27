import { GetAllCategoriesQuery } from 'graphql/generated/schema'
import { useState } from 'react'

import * as S from './styles'

export const Category = ({
  categories: allCategories
}: GetAllCategoriesQuery) => {
  const [categories, setCategories] = useState([])

  return (
    <S.Wrapper>
      <S.Button
        className={categories.length === 0 ? 'active' : ''}
        onClick={() => setCategories([])}
      >
        All
      </S.Button>

      {allCategories?.map((category) => (
        <S.Button
          key={category.name}
          className={categories.includes(category.name) ? 'active' : ''}
          onClick={() => setCategories([category.name])}
        >
          {category.name}
        </S.Button>
      ))}
    </S.Wrapper>
  )
}
