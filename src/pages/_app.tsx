import type { AppProps } from 'next/app'
import 'animate.css'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import { BaseLayout } from 'layouts'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  const client = useApollo(pageProps.initialApolloState)

  return (
    <BaseLayout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </BaseLayout>
  )
}

export default MyApp
