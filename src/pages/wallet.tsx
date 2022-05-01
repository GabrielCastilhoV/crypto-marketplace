import Head from 'next/head'

import { WalletView } from 'views'

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
