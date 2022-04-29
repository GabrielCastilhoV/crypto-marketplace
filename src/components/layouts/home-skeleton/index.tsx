import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './styles'

export const HomeSkeleton = () => {
  return (
    <S.Wrapper>
      <SkeletonTheme baseColor="#1B1721" highlightColor="#474053">
        <Skeleton className="skeleton-item" />
        <Skeleton className="skeleton-item" />
        <Skeleton className="skeleton-item" />
        <Skeleton className="skeleton-item" />
        <Skeleton className="skeleton-item" />
        <Skeleton className="skeleton-item" />
      </SkeletonTheme>
    </S.Wrapper>
  )
}
