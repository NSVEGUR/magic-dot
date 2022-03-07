import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Favicon from 'ui/src/Favicon'
import Head from 'next/head'
import Navbar from 'src/components/Navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Magic Dot</title>
        <Favicon></Favicon>
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
