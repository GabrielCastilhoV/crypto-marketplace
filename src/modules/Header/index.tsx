import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Menu, Search } from 'components'

import * as S from './styles'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/img/logo.svg" width={56} height={56} alt="Crypto" />
          </a>
        </Link>
      </div>

      <S.SearchContainer>
        <Search />
      </S.SearchContainer>

      <S.Menu>
        <Image
          src="/img/menu.svg"
          width={23}
          height={23}
          alt="Crypto"
          role="button"
          aria-label="Open Menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </S.Menu>

      <Menu
        handleToggle={setIsOpen}
        aria-hidden={!isOpen}
        state={isOpen ? 'open' : 'closed'}
      />
    </S.Wrapper>
  )
}
