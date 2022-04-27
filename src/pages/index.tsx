import Head from 'next/head'

import { HomeLayout } from 'layouts'

import { initializeApollo } from 'utils/apollo'

import { GET_NFTs, GET_CATEGORIES } from 'graphql/queries'
import { GetNftsQuery, GetAllCategoriesQuery } from 'graphql/generated/schema'

export type HomeProps = GetNftsQuery & GetAllCategoriesQuery

const Home = (props: HomeProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home | Crypto</title>
      </Head>

      <HomeLayout {...props} />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data: nfts } = await apolloClient.query<GetNftsQuery>({
    query: GET_NFTs
  })

  const { data: categories } = await apolloClient.query<GetAllCategoriesQuery>({
    query: GET_CATEGORIES
  })

  return {
    props: {
      nfts: nfts.nfts,
      categories: categories.categories,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
