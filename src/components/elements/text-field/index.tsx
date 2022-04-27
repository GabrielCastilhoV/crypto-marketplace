import { useState } from 'react'

import type { TextFieldProps } from './types'
import * as S from './styles'

export const TextField = ({
  onInputChange,
  initialValue = '',
  icon,
  name,
  disabled = false,
  error,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper {...rest}>
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}

        <S.Input
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...rest}
        />
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
