import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Menu, Search } from 'components'

import { HeaderProps } from './types'
import * as S from './styles'

export const Header = ({ showSearch = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollPosition(this.scrollY)
    })
  }, [])

  return (
    <S.Wrapper className={scrollPosition > 0 ? 'hasScroll' : ''}>
      <S.Content>
        <div className="logo">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo.svg"
                width={56}
                height={56}
                alt="Crypto"
              />
            </a>
          </Link>
        </div>

        {showSearch && (
          <S.SearchContainer>
            <Search />
          </S.SearchContainer>
        )}

        <S.Menu>
          <Image
            src="/icons/menu.svg"
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
      </S.Content>
    </S.Wrapper>
  )
}
