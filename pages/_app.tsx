import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isLandingPage = router.pathname === '/'

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {!isLandingPage && <Footer />}
    </>
  )
}
