import { Navigation } from 'modules'

import * as S from './styles'

type AppLayoutProps = {
  children: React.ReactNode
  hasNavigation?: boolean
} & S.AppVariants

export const AppLayout = ({
  children,
  hasNavigation = true
}: AppLayoutProps) => {
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
