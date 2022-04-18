import { render, screen } from '@testing-library/react'

import { Navigation } from '.'

describe('Navigation module', () => {
  it('should render correctly', () => {
    render(<Navigation />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
