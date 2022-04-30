import { render, screen } from '@testing-library/react'

import { Menu } from '.'

describe('Menu component', () => {
  it('should render correctly', () => {
    render(<Menu handleToggle={() => jest.fn()} />)

    expect(screen.getByRole('img', { name: /Crypto/i })).toBeInTheDocument()
  })

  it('should render the navigation links', () => {
    render(<Menu handleToggle={() => jest.fn()} />)

    expect(screen.getByText(/wallet/i)).toBeInTheDocument()
    expect(screen.getByText(/profile/i)).toBeInTheDocument()
    expect(screen.getByText(/ranking/i)).toBeInTheDocument()
  })
})
