import { Navigation } from 'modules'

import * as S from './styles'

export const BaseLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.NavContainer>
        <Navigation />
      </S.NavContainer>

      {children}
    </S.Wrapper>
  )
}
