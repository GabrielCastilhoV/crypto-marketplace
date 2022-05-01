import { render, screen } from '@testing-library/react'

import { BidsList } from '.'

describe('BidsList component', () => {
  it('should render correctly', () => {
    render(<BidsList />)

    expect(screen.getAllByText('0.8 ETH')).toHaveLength(2)
    expect(screen.getAllByText('9h ago')).toHaveLength(2)
  })
})
