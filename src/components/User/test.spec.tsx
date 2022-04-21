import { render, screen } from '@testing-library/react'

import { User } from '.'

describe('User component', () => {
  it('should render correctly', () => {
    render(<User name="Gabriel" img="/images/avatar.png" />)

    expect(screen.getByRole('img', { name: /Gabriel/i })).toBeInTheDocument()
  })
})
