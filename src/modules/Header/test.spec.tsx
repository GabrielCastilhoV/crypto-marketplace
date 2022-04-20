import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('Header module', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
})
