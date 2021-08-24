import ThemeProvider from '@material-ui/styles/ThemeProvider'
import React, { useEffect } from 'react'
import '../styles/globals.css'
import theme from '../styles/theme'
import Head from 'next/head'
import { DefaultLayout } from '../components/Layouts'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
