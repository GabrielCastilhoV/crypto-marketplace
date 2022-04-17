import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <a>
          <Image src="/img/logo.svg" width={56} height={56} alt="Crypto" />
        </a>
      </Link>

      <S.Menu>
        <Image
          src="/img/menu.svg"
          width={23}
          height={23}
          alt="Crypto"
          role="button"
        />
      </S.Menu>
    </S.Wrapper>
  )
}
