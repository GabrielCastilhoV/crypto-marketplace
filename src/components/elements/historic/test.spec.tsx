import { render, screen } from '@testing-library/react'

import { Historic } from '.'
import { HistoricMock } from './mock'

describe('Historic component', () => {
  it('should render correctly', () => {
    render(<Historic data={HistoricMock} />)

    expect(screen.getByRole('img', { name: /outcome/i })).toBeInTheDocument()
    expect(screen.getAllByText('1.2 ETH')).toHaveLength(2)
  })
})
