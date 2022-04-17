import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('Header module', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
