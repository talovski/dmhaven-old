import 'tailwindcss/tailwind.css'

import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default App
