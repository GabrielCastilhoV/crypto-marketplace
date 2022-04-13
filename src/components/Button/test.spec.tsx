import { render, screen } from '@testing-library/react'

import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Button } from '.'

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Button>Sign in</Button>)

    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(<Button icon={<AiOutlineShoppingCart data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
