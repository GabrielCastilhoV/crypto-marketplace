import { Navigation } from 'modules'

import * as S from './styles'

type BaseLayoutProps = {
  children: React.ReactNode
  hasNavigation?: boolean
} & S.BaseVariants

export const BaseLayout = ({
  children,
  hasNavigation = true
}: BaseLayoutProps) => {
  return (
    <S.Wrapper hasNavigation={hasNavigation ? 'true' : 'false'}>
      {hasNavigation && (
        <S.NavContainer>
          <Navigation />
        </S.NavContainer>
      )}

      {children}
    </S.Wrapper>
  )
}
