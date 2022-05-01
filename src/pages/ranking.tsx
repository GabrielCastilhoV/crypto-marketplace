import Head from 'next/head'

import { RankingView } from 'views'

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
