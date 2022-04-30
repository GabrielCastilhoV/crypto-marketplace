import Image from 'next/image'

import * as S from './syles'

export const Empty = () => {
  return (
    <S.Wrapper>
      <Image
        src="/images/empty.svg"
        alt="a woman holding a magnifying glass searching the internet"
        width={300}
        height={300}
      />
      <h2>No results found</h2>
    </S.Wrapper>
  )
}
