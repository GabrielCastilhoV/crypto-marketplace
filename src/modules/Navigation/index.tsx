import Link from 'next/link'

import { Button } from 'components/elements'

import {
  IoDiamondOutline,
  IoWalletOutline,
  IoAddOutline,
  IoPulseOutline,
  IoPersonCircleOutline
} from 'react-icons/io5'

import * as S from './styles'

export const Navigation = () => {
  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <a>
          <Button size="small" icon={<IoDiamondOutline />} />
        </a>
      </Link>

      <Link href="/wallet" passHref>
        <a>
          <Button size="small" icon={<IoWalletOutline />} />
        </a>
      </Link>

      <Link href="/" passHref>
        <a>
          <Button size="small" icon={<IoAddOutline />} color="secondary" />
        </a>
      </Link>

      <Link href="/ranking" passHref>
        <a>
          <Button size="small" icon={<IoPulseOutline />} />
        </a>
      </Link>

      <Link href="/profile" passHref>
        <a>
          <Button size="small" icon={<IoPersonCircleOutline />} />
        </a>
      </Link>
    </S.Wrapper>
  )
}
