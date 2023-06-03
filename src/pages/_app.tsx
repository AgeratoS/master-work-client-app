import { ApolloProvider } from '@apollo/client'
import client from '@/apollo-client'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import { CssBaseline } from '@mui/material'
import { AppPropsWithLayout } from '@/common/types'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  </ApolloProvider>
}
