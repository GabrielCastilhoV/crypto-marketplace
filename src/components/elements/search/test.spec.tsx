import { render, screen } from '@testing-library/react'

import { Search } from '.'

describe('Search component', () => {
  it('should render correctly', () => {
    render(<Search />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
