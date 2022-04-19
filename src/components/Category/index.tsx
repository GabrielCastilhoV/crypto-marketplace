import { useState } from 'react'

import { CategoryMock } from './mock'

import * as S from './styles'

export const Category = () => {
  const [categories, setCategories] = useState([])

  return (
    <S.Wrapper>
      <S.Button
        className={categories.length === 0 ? 'active' : ''}
        onClick={() => setCategories([])}
      >
        All
      </S.Button>

      {CategoryMock?.map((category) => (
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
