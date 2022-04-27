import { render, screen } from '@testing-library/react'

import { Category } from '.'

describe('Category component', () => {
  it('should render correctly', () => {
    render(<Category />)

    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
  })
})
