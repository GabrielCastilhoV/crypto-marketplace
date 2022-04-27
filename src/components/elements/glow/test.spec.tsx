import { render, screen } from '@testing-library/react'

import { Glow } from '.'

describe('Glow component', () => {
  it('should render correctly', () => {
    render(<Glow data-testid="glow" />)

    expect(screen.getByTestId('glow')).toBeInTheDocument()
  })
})
