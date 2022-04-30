import { render, screen } from '@testing-library/react'

import { Empty } from '.'

describe('Empty component', () => {
  it('should render correctly', () => {
    render(<Empty />)

    expect(
      screen.getByRole('img', {
        name: /a woman holding a magnifying glass searching the internet/i
      })
    ).toBeInTheDocument()
  })
})
