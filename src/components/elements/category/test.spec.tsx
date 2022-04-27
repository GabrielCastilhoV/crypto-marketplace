import { render, screen } from '@testing-library/react'

import { Category } from '.'
import { CategoryMock } from './mock'

describe('Category component', () => {
  it('should render correctly', () => {
    render(<Category categories={CategoryMock} />)

    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
  })
})
