import type { AppProps } from 'next/app'
import 'animate.css'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
