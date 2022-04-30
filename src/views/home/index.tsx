import { Header } from 'modules'
import { Card, Category, Empty, Glow } from 'components/elements'
import { HomeSkeleton } from 'components/layouts'

import { useHomeContext } from 'contexts'

import * as S from './styles'

export const HomeView = () => {
  const { nfts, isLoading, categories, setAllCategories } = useHomeContext()

  return (
    <S.Wrapper>
      <Header showSearch />

      <S.Content>
        <Glow color="pink" position="top" intensity="medium" />
        <Glow color="blue" position="bottom" intensity="medium" />

        <S.CategoryContainer>
          <Category
            allCategories={categories}
            setAllCategories={setAllCategories}
          />
        </S.CategoryContainer>

        {isLoading ? (
          <S.SkeletonContainer>
            <HomeSkeleton />
          </S.SkeletonContainer>
        ) : (
          <S.CardsContainer>
            {nfts?.map((card, index) => (
              <Card key={index} {...card} />
            ))}

            {nfts?.length === 0 && <Empty />}
          </S.CardsContainer>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
