import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

import { useAuthContext } from 'contexts'
import { User } from '../user'

import { navigationRoutes } from 'utils/constants'

import { MenuProps } from './types'
import * as S from './styles'

export const Menu = ({ handleToggle, ...rest }: MenuProps) => {
  const { handleDisconnectFromMetaMask } = useAuthContext()

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
        {navigationRoutes.map((item) => (
          <Link href={item.url} passHref key={item.title}>
            <S.MenuLink>{item.title}</S.MenuLink>
          </Link>
        ))}
      </S.MenuNav>

      <S.Profile>
        <div className="user">
          <User name="Gabriel" img="/images/avatar.png" />
          <span>Gabriel</span>
        </div>

        <S.SignOut onClick={handleDisconnectFromMetaMask}>Sign out</S.SignOut>
      </S.Profile>
    </S.Wrapper>
  )
}
