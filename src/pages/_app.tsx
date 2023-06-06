import { ApolloProvider } from '@apollo/client'
import client from '@/apollo-client'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import { CssBaseline } from '@mui/material'
import { AppPropsWithLayout } from '@/common/types'
import AuthProcess from '@/common/containers/AuthProcess'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AuthProcess /> */}
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  </ApolloProvider>
}
