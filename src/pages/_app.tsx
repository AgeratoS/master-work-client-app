import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import client from '@/apollo-client'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
}
