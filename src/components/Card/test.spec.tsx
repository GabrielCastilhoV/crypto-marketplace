import { render, screen } from '@testing-library/react'

import { Card } from '.'
import { CardMock } from './mock'

describe('Card component', () => {
  it('should render correctly', () => {
    render(<Card {...CardMock[0]} />)

    expect(screen.getByRole('heading', { name: /hacker/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /1.2 ETH/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /hacker/i })).toBeInTheDocument()
  })
})
