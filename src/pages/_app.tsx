import type { AppProps } from 'next/app'
import 'animate.css'

import { useRouter } from 'next/router'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import { HomeProvider, AuthProvider } from 'contexts'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import { AppLayout } from 'components/layouts'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  const router = useRouter()
  const isLogin = router.pathname === '/login'

  const client = useApollo(pageProps.initialApolloState)

  function getLibrary(provider) {
    return new Web3(provider)
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <AppLayout hasNavigation={!isLogin}>
          <ApolloProvider client={client}>
            <HomeProvider>
              <Component {...pageProps} />
            </HomeProvider>
          </ApolloProvider>
        </AppLayout>
      </AuthProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
