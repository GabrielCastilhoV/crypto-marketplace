import { render, screen } from '@testing-library/react'

import { Category } from '.'
import { CategoryMock } from './mock'

describe('Category component', () => {
  it('should render correctly', () => {
    render(
      <Category allCategories={CategoryMock} setAllCategories={() => {}} />
    )

    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
  })
})
