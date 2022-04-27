import Link from 'next/link'

import { Button } from 'components/elements'

import { navigationRoutes } from 'utils/constants'

import * as S from './styles'

export const Navigation = () => {
  return (
    <S.Wrapper>
      {navigationRoutes.map((item) => (
        <Link href={item.url} passHref key={item.title}>
          <a>
            <Button size="small" color={item.color} icon={item.icon} />
          </a>
        </Link>
      ))}
    </S.Wrapper>
  )
}
