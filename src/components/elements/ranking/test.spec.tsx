import { render, screen } from '@testing-library/react'

import { Ranking } from '.'

describe('Ranking component', () => {
  it('should render correctly', () => {
    render(<Ranking />)

    expect(screen.getAllByText('32.322,2 ETH')).toHaveLength(5)
  })
})
