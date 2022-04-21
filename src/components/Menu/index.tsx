import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

import { User } from 'components'

import { MenuProps } from './types'
import * as S from './styles'

export const Menu = ({ handleToggle, ...rest }: MenuProps) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { key } = event

      if (key === 'Escape') {
        handleToggle(false)
      }
    }

    document.addEventListener('keyup', handleKeyDown)

    return () => {
      document.removeEventListener('keyup', handleKeyDown)
    }
  }, [handleToggle])

  return (
    <S.Wrapper {...rest}>
      <S.Header>
        <Link href="/">
          <a>
            <Image src="/icons/logo.svg" width={56} height={56} alt="Crypto" />
          </a>
        </Link>

        <IoMdClose onClick={() => handleToggle(false)} />
      </S.Header>

      <S.MenuNav>
        <Link href="/" passHref>
          <S.MenuLink>Feed</S.MenuLink>
        </Link>

        <Link href="/wallet" passHref>
          <S.MenuLink>Wallet</S.MenuLink>
        </Link>

        <Link href="/profile" passHref>
          <S.MenuLink>Profile</S.MenuLink>
        </Link>

        <Link href="/ranking" passHref>
          <S.MenuLink>Ranking</S.MenuLink>
        </Link>
      </S.MenuNav>

      <S.Profile>
        <div className="user">
          <User name="Gabriel" img="/images/avatar.png" />
          <span>Gabriel</span>
        </div>

        <Link href="/login" passHref>
          <S.SignOut>Sign out</S.SignOut>
        </Link>
      </S.Profile>
    </S.Wrapper>
  )
}
