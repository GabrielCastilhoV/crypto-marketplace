import type { NextPage } from 'next'
import Head from 'next/head'

import { LoginView } from 'views'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Crypto</title>
      </Head>

      <LoginView />
    </>
  )
}

export default Login
