import Head from 'next/head'

import { BaseLayout, HomeLayout } from 'layouts'

import { GET_NFTs } from 'graphql/queries/nfts'
import { GetNftsQuery } from 'graphql/generated/schema'
import { initializeApollo } from 'utils/apollo'

interface IHome {
  data: GetNftsQuery
}

const Home = (props: IHome): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home | Crypto</title>
      </Head>

      <BaseLayout>
        <HomeLayout {...props.data} />
      </BaseLayout>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetNftsQuery>({
    query: GET_NFTs
  })

  return {
    props: {
      data,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
