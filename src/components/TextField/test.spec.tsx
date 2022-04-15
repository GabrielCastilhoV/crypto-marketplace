import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AiOutlineMail } from 'react-icons/ai'

import { TextField } from '.'

describe('TextField component', () => {
  it('should render correctly', () => {
    render(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with Icon', () => {
    render(<TextField icon={<AiOutlineMail data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()

    render(<TextField onInputChange={onInputChange} name="textfield" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField onInputChange={onInputChange} name="textfield" disabled />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })
})
