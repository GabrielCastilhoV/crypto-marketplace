import Head from 'next/head'

import { WalletView } from 'views'

import { withAuth } from 'utils/helpers'

const Wallet = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Wallet | Crypto</title>
      </Head>

      <WalletView />
    </>
  )
}

export default Wallet

export const getServerSideProps = withAuth(async () => {
  return {
    props: {}
  }
})
