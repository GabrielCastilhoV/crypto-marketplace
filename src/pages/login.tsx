import type { NextPage } from 'next'
import Head from 'next/head'

import { LoginLayout } from 'layouts'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Crypto</title>
      </Head>

      <LoginLayout />
    </>
  )
}

export default Login
