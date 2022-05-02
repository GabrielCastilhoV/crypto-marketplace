import Head from 'next/head'

import { RankingView } from 'views'

import { withAuth } from 'utils/helpers'

const Ranking = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Ranking | Crypto</title>
      </Head>

      <RankingView />
    </>
  )
}

export default Ranking

export const getServerSideProps = withAuth(async () => {
  return {
    props: {}
  }
})
