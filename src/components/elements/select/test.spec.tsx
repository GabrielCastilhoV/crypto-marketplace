import { render, screen } from '@testing-library/react'

import { Select } from '.'

describe('Select component', () => {
  it('should render correctly', () => {
    render(<Select />)

    expect(screen.getByText('Last 7 days')).toBeInTheDocument()
    expect(screen.getByText('Last 30 days')).toBeInTheDocument()
    expect(screen.getByText('Last 60 days')).toBeInTheDocument()
  })
})
